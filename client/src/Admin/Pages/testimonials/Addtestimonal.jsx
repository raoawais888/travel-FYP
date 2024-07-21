import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AdminMasterLayout from '../../AdminMasterLayout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddTestimonial = () => {
    const navigate = useNavigate();
  const initialValues = {
    name: '',
    testimonial: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Client Name is required'),
    testimonial: Yup.string().required('Testimonial is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
    const response =  await axios.post('http://localhost:8000/admin/testimonials', values);

      if(response.data.success){
        toast.success(response.data.message)
        resetForm();
        navigate("/admin/testimonials")
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('There was an error!', error);

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminMasterLayout>
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="fa-solid fa-tags text-success"></i>
              </div>
              <div>Testimonials</div>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Add testimonial</h5>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                        <label htmlFor="name" className="mr-sm-2">
                          Client Name
                        </label>
                        <Field name="name" id="name" placeholder="Client Name" type="text" className="form-control" />
                        <ErrorMessage name="name" component="p" className="text-danger" />
                      </div>

                      <div className="mb-2 mt-2 mr-sm-2 mb-sm-0 position-relative form-group">
                        <label htmlFor="testimonial" className="mr-sm-2">
                          Testimonial
                        </label>
                        <Field name="testimonial" id="testimonial" placeholder="Testimonial" as="textarea" className="form-control" />
                        <ErrorMessage name="testimonial" component="p" className="text-danger" />
                      </div>

                      <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminMasterLayout>
  );
};

export default AddTestimonial;
