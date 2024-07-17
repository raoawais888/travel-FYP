import React from 'react'
import AdminMasterLayout from '../../AdminMasterLayout'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
	const [agencies, setAgencies] = useState([]);
        const navigate = useNavigate();
	useEffect(() => {
	  const fetchAgencies = async () => {
		try {
		  const response = await axios.get('http://localhost:8000/admin/blogs');
		  if (response.data.success) {
			setAgencies(response.data.blogs);
			  console.log("date ::::::::::::" , response.data.blogs) 
		  } else {
			toast.error(response.data.error);
		  }
		} catch (error) {
		  console.error('Error fetching blogs:', error);
		  toast.error('Failed to fetch blogs');
		}
	  };
  
	  fetchAgencies();
	}, []);
  
	const handleDelete = async (blogId) => {
	  if (window.confirm('Are you sure you want to delete this blog?')) {
		try {
		  const response = await axios.delete(`http://localhost:8000/admin/blogs/${blogId}`);
		  if (response.data.success) {
			toast.success(response.data.message);
			setAgencies(agencies.filter((agency) => agency._id !== blogId));
		  } else {
			toast.error(response.data.error);
		  }
		} catch (error) {
		  console.error('Error deleting blog:', error);
		  toast.error('Failed to delete blog');
		}
	  }
	};


	const handleEdit = (blogId) => {
		navigate(`/admin/blogs/edit/${blogId}`);
	  };

  return (

    <AdminMasterLayout>

<div class="app-main__inner">
	<div class="app-page-title">
		<div class="page-title-wrapper">
			<div class="page-title-heading">
				<div class="page-title-icon"> <i class="fa-solid fa-building icon-gradient bg-happy-itmeo">
</i> </div>
				<div>Blogs
				
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<div class="main-card mb-3 card">
				<div class="card-body">
					<h5 class="card-title">All Blogs</h5>
					
					<table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Title</th>
                        <th>Image</th>
                        
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agencies.map((agency, index) => (
                        <tr key={agency._id}>
                          <td className="text-center text-muted">{index + 1}</td>
                          <td>{agency.title}</td>
                          
                          <td> <img src={`http://localhost:8000/${agency.featureImage}`} alt="" width={30} height={30} /> </td>
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

export default Blogs