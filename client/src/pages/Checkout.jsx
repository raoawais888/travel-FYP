import React from 'react';
import MasterLyout from '../MasterLyout';
import Banner from '../components/Shared/Banner';
import { useFormik } from 'formik';
import UserSchema from '../Validations/UserValidation';
import ApiRequest from '../helper/ApiRequest';
import { toast } from 'react-toastify';
import PayPalButton from '../components/PayPalButton';


const Checkout = () => {

 

    


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      address: '',
      address2: '',
      country: '',
      state: '',
      zip: '',
      paymentMethod: 'credit',
      ccName: '',
      ccNumber: '',
      ccExpiration: '',
      ccCVV: '',
    },
  
    onSubmit: async (values) => {
      try {
        const response = await ApiRequest.post('/login', values);
        toast.success('Login successful!');
      } catch (error) {
        toast.error('Login failed.');
      }
    },
  });

  return (
    <MasterLyout>
      <Banner title="Login" image="url(/images/contact_background.jpg)" />
   

    

      <div className="container">
        <div className="py-5 text-center">
          <h2>Checkout form</h2>
          <p className="lead">
            Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.errors.firstName && (
                    <div className="invalid-feedback">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.errors.lastName && (
                    <div className="invalid-feedback">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
              </div>

<div className="row">
              <div className="col-md-6 mb-3">
              <div className="mb-3">
                <label htmlFor="username">Number</label>
                <div className="input-group">
               
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.errors.username && (
                    <div className="invalid-feedback" style={{ width: '100%' }}>
                      {formik.errors.username}
                    </div>
                  )}
                </div>
              </div>

</div>

<div className="col-md-6 mb-3">
              <div className="mb-3">
                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <div className="invalid-feedback">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.address && (
                  <div className="invalid-feedback">
                    {formik.errors.address}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="address2"
                  value={formik.values.address2}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  {formik.errors.country && (
                    <div className="invalid-feedback">
                      {formik.errors.country}
                    </div>
                  )}
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  {formik.errors.state && (
                    <div className="invalid-feedback">
                      {formik.errors.state}
                    </div>
                  )}
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.errors.zip && (
                    <div className="invalid-feedback">
                      {formik.errors.zip}
                    </div>
                  )}
                </div>
              </div>
              <hr className="mb-4" />
              

              <h4 className="mb-3">Payment</h4>

          
              <PayPalButton />


           
            
         
            </form>
          </div>
        </div>

        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">&copy; 2017-2019 Company Name</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Support</a></li>
          </ul>
        </footer>
      </div>
    </MasterLyout>
  );
};

export default Checkout;
