import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AdminMasterLayout from '../../AdminMasterLayout';
import { toast } from 'react-toastify';
const AddUser = () => {
  // Formik form handling and validation schema
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Make API call to backend to add admin user
        const response = await axios.post('http://localhost:8000/admin/admin-add', values);
       
            
        toast.success(response.data.message)
               resetForm(); // Reset form fields on success
              
      
      } catch (error) {
         toast.error(error)
        console.error('API error:', error); // Handle error
      } finally {
        setSubmitting(false); // Set submitting state to false
      }
    },
  });

  return (
    <AdminMasterLayout>
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="fa-solid fa-user text-success"></i>
              </div>
              <div>Add Admin</div>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Add Admin</h5>
                <form onSubmit={formik.handleSubmit} className="form-inline">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleEmail33" className="sr-only">
                      Email
                    </label>
                    <input
                      id="exampleEmail33"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className={`mr-2 form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                  </div>
                  <div className="position-relative form-group">
                    <label htmlFor="examplePassword44" className="sr-only">
                      Password
                    </label>
                    <input
                      id="examplePassword44"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={`mr-2 form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminMasterLayout>
  );
};

export default AddUser;
