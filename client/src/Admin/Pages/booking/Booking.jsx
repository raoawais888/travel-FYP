import React from 'react'
import AdminMasterLayout from '../../AdminMasterLayout'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
	const [agencies, setAgencies] = useState([]);
        const navigate = useNavigate();
	useEffect(() => {
	  const fetchAgencies = async () => {
		try {
            const userGet = JSON.parse(localStorage.getItem("user"))
             console.log(userGet.role);
		  const response = await axios.get(`http://localhost:8000/admin/bookings/${userGet._id}` );
		  if (response.data.success) {
			setAgencies(response.data.bookings);
			//   console.log("date ::::::::::::" , response.data.bookings[0].address) 
		  } else {
			toast.error(response.data.error);
		  }
		} catch (error) {
		  console.error('Error fetching Bookings:', error);
		  toast.error('Failed to fetch Bookings');
		}
	  };
  
	  fetchAgencies();
	}, []);
  
	const handleDelete = async (agencyId) => {
	  if (window.confirm('Are you sure you want to delete this Order?')) {
		try {
		  const response = await axios.delete(`http://localhost:8000/admin/bookings/${agencyId}`);
		  if (response.data.success) {
			toast.success(response.data.message);
			setAgencies(agencies.filter((agency) => agency._id !== agencyId));
		  } else {
			toast.error(response.data.error);
		  }
		} catch (error) {
		  console.error('Error deleting agency:', error);
		  toast.error('Failed to delete agency');
		}
	  }
	};


	const handleEdit = (agencyId) => {
		navigate(`/admin/booking/view/${agencyId}`);
	  };

  return (

    <AdminMasterLayout>

<div class="app-main__inner">
	<div class="app-page-title">
		<div class="page-title-wrapper">
			<div class="page-title-heading">
				<div class="page-title-icon"> <i class="fa-solid fa-building icon-gradient bg-happy-itmeo">
</i> </div>
				<div>Bookings
				
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<div class="main-card mb-3 card">
				<div class="card-body">
					<h5 class="card-title">All Bookings</h5>
					
					<table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">Booking NO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Members</th>
                        <th>price</th>
                        
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agencies.map((booking, index) => (
                        <tr key={booking._id}>
                          <td className="text-center text-muted">{booking.invoiceNumber} </td>
                          <td>{`${booking.firstName}  ${booking.lastName}`}</td>
                          <td>{booking.email}</td>
                          <td>{booking.address}</td>
                          <td>{booking.number}</td>
                          <td>{booking.members}</td>
                          <td> ${ parseInt (booking.packageId.price * booking.members)}</td>
                       
                          <td>
                            {/* <button
                              className="btn btn-sm btn-primary mr-2"
                              onClick={() => handleEdit(booking._id)}
                            >
                              Edit
                            </button> */}
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(booking._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

				</div>
			</div>
		</div>
	</div>
</div>
    </AdminMasterLayout>
   
  )
}

export default Booking