import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MasterLayout from '../MasterLyout';
import Banner from '../components/Shared/Banner';
import PayPalButton from '../components/PayPalButton';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({ images: [] });
  const { packageId } = useParams();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/packages/${packageId}`);
    
        setData(response.data.package);
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [packageId]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    number: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    members: Yup.number().required('Members is required').min(1, 'At least one member is required'),
  });


 const {values , handleChange , handleSubmit , errors}  = useFormik({
    initialValues: {
      firstName: '',
      number: '',
      username: '',
      email: '',
      address: '',
      members: '', 
      packageId: packageId
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("submit");
      try {
        const response =  await axios.post('http://localhost:8000/book-now', values);
         if(response.data.success){
          toast.success(response.data.message);
          navigate("/offers")
         }
  
      } catch (error) {
        toast.error(response.data.message);
      }
    },
  });

  return (
    <MasterLayout>
      <Banner title="Checkout" image="url(/images/contact_background.jpg)" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Booking Item</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Package name</h6>
                  <small className="text-muted">{data && data.location }</small>
                </div>
                <span className="text-muted">${data.price}</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        className="form-control"
        id="firstName"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <p className="text-danger">{errors.firstName}</p>
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <p className="text-danger">{errors.lastName}</p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="number">Number</label>
      <input
        type="text"
        className="form-control"
        id="number"
        name="number"
        value={values.number}
        onChange={handleChange}
      />
      <p className="text-danger">{errors.number}</p>
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <p className="text-danger">{errors.email}</p>
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="address">Address</label>
    <input
      type="text"
      className="form-control"
      id="address"
      name="address"
      value={values.address}
      onChange={handleChange}
    />
    <p className="text-danger">{errors.address}</p>
  </div>
  <div className="row">
    <div className="col-md-12 mb-3">
      <label htmlFor="members">Members</label>
      <input
        type="text"
        className="form-control"
        id="members"
        name="members"
        value={values.members}
        onChange={handleChange}
      />
      <p className="text-danger">{errors.members}</p>
    </div>
  </div>
  <button type="submit" className="button search_button">Book Now</button>
</form>


            <h4 className="mb-3 mt-5">Payment</h4>
            {/* <PayPalButton /> */}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Checkout;
