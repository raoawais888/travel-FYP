import React from 'react'
import AdminMasterLayout from '../../AdminMasterLayout'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Agency = () => {
	const [agencies, setAgencies] = useState([]);
        const navigate = useNavigate();
	useEffect(() => {
	  const fetchAgencies = async () => {
		try {
		  const response = await axios.get('http://localhost:8000/admin/agencies');
		  if (response.data.success) {
			setAgencies(response.data.agencies);
			//   console.log("date ::::::::::::" , response.data.agencies) 
		  } else {
			toast.error(response.data.error);
		  }
		} catch (error) {
		  console.error('Error fetching agencies:', error);
		  toast.error('Failed to fetch agencies');
		}
	  };
  
	  fetchAgencies();
	}, []);
  
	const handleDelete = async (agencyId) => {
	  if (window.confirm('Are you sure you want to delete this agency?')) {
		try {
		  const response = await axios.delete(`http://localhost:8000/admin/agencies/${agencyId}`);
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
		navigate(`/admin/agencies/edit/${agencyId}`);
	  };

  return (

    <AdminMasterLayout>

<div class="app-main__inner">
	<div class="app-page-title">
		<div class="page-title-wrapper">
			<div class="page-title-heading">
				<div class="page-title-icon"> <i class="fa-solid fa-building icon-gradient bg-happy-itmeo">
</i> </div>
				<div>Agencies
				
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<div class="main-card mb-3 card">
				<div class="card-body">
					<h5 class="card-title">All Agencies</h5>
					
					<table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Agency Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>logo</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agencies.map((agency, index) => (
                        <tr key={agency._id}>
                          <td className="text-center text-muted">{index + 1}</td>
                          <td>{agency.agencyName}</td>
                          <td>{agency.agencyEmail}</td>
                          <td>{agency.agencyAddress}</td>
                          <td>{agency.agencyNumber}</td>
                          <td> <img src={`http://localhost:8000/${agency.agencyLogo}`} alt="" width={30} height={30} /> </td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary mr-2"
                              onClick={() => handleEdit(agency._id)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(agency._id)}
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

export default Agency