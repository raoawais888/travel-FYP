import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import AdminMasterLayout from '../../AdminMasterLayout'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate = useNavigate();
    const [packages, setPackages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/packages?page=${page}&search=${searchTerm}`);
        setPackages(response.data.packages);
        setTotalPages(response.data.totalPages);
        console.log("all packages ",setPackages)
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, [page, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setPage(1); // Reset page when searching
  };


   const handleRemove = async (packageId) => {
    try {
        const response =  await axios.delete(`http://localhost:8000/admin/packages/${packageId}`);
        setPackages(packages.filter((pkg) => pkg._id !== packageId));
        if(response.data.success){
          toast.success(response.data.message);
        }
        
    } catch (error) {
      toast.error(response.data.error);
    }
  };

  const handleEdit = (packageId) => {
    navigate(`/admin/packages/edit/${packageId}`);
  };

  return (
    
    <AdminMasterLayout>

    <div class="app-main__inner">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon"> <i class="fa-solid fa-cube icon-gradient bg-happy-itmeo">
    </i> </div>
                    <div>All Packages
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <h5 class="card-title">Packages</h5>
                        <form onSubmit={handleSearchSubmit} className='search_filter'>
                       <input type="text" value={searchTerm} onChange={handleSearchChange} className='form-control w-25' placeholder="Search by location" />
                       <button type="submit" className='btn btn-primary'>Search</button>
                       </form>
                        <table class="mb-0 table table-bordered">
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                    <th colSpan={2} >Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                            { packages.map((data) => (
                                <tr key={data._id}>
                            
                                    <td>{data.location}</td>
                                    <td>{data.price}</td>
                                    <td>{`${moment(data.startDate).format('YYYY-MM-DD')} To  ${ moment(data.endDate).format('YYYY-MM-DD') }`}</td>
                                    <td> <img src={`http://localhost:8000/${data.images[0]}`} alt="" width={30} height={30} /> </td>
                                      <td> <button className='btn btn-small btn-primary ' onClick={() => handleEdit(data._id)}>Edit </button>  </td>
                                      <td> <button className='btn btn-small btn-danger' onClick={()=>{handleRemove(data._id)}} >remove </button>  </td>
                                   
                                </tr>
                                
                               
                            ))}

                            </tbody>
                        </table>

 {/* Pagination controls */}
    
 <nav aria-label="Page navigation example ">
  <ul class="pagination jutify-content-end mt-3">
  {Array.from({ length: totalPages }, (_, index) => (
    <li class="page-item"><a class="page-link" href="#" key={index} onClick={() => setPage(index + 1)}>
    {index + 1}
</a></li>
  ))}
  </ul>
</nav>


        
      
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        </AdminMasterLayout>
       
  )
}

export default Packages