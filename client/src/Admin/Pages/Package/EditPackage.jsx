import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminMasterLayout from '../../AdminMasterLayout';
import { toast } from 'react-toastify';

const EditPackage = () => {
  const [images, setImages] = useState([]);
  const [initialValues, setInitialValues] = useState({
    location: '',
    price: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const navigate = useNavigate();
  const { packageId } = useParams();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/packages/${packageId}`);
        const packageData = response.data.package;
        setInitialValues({
          location: packageData.location,
          price: packageData.price,
          startDate: packageData.startDate,
          endDate: packageData.endDate,
          description: packageData.description,
        });
        setImages(packageData.images.map((image) => ({ file: null, preview: `http://localhost:8000/${image}` })));
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [packageId]);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const validationSchema = Yup.object({
    location: Yup.string().required('Location is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date().required('End date is required'),
    description: Yup.string().required('Description is required'),
  });

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('location', values.location);
    formData.append('price', values.price);
    formData.append('startDate', values.startDate);
    formData.append('endDate', values.endDate);
    formData.append('description', values.description);
    images.forEach((image) => {
      if (image.file) {
        formData.append('images', image.file);
      }
    });

    try {
      const response = await axios.put(`http://localhost:8000/admin/packages/${packageId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/admin/packages');
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error('Error updating package:', error);
    }
  };

  return (
    <AdminMasterLayout>
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="fa-solid fa-cube text-success"></i>
              </div>
              <div>Edit Package</div>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Edit package</h5>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="location">Location</label>
                            <Field name="location" type="text" className="form-control" />
                            <ErrorMessage name="location" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="price">Price</label>
                            <Field name="price" type="number" className="form-control" />
                            <ErrorMessage name="price" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <Field name="startDate" type="date" className="form-control" />
                            <ErrorMessage name="startDate" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="endDate">End Date</label>
                            <Field name="endDate" type="date" className="form-control" />
                            <ErrorMessage name="endDate" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <label>Images</label>
                            <br />
                            <small>Note: The first image is considered the feature image.</small>
                            <div
                              {...getRootProps()}
                              style={{
                                border: '2px dashed #cccccc',
                                padding: '20px',
                                textAlign: 'center',
                                cursor: 'pointer',
                              }}
                            >
                              <input {...getInputProps()} />
                              <p>Drag & drop some files here, or click to select files</p>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                              {images.map((image, index) => (
                                <div key={index} style={{ margin: '10px', position: 'relative' }}>
                                  <img
                                    src={image.preview}
                                    alt="Preview"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    style={{
                                      position: 'absolute',
                                      top: '5px',
                                      right: '5px',
                                      background: 'red',
                                      color: 'white',
                                      border: 'none',
                                      borderRadius: '50%',
                                      width: '20px',
                                      height: '20px',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    &times;
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="description">Description</label>
                        <Field name="description" type="text" className="form-control" />
                        <ErrorMessage name="description" component="div" className="text-danger" />
                      </div>
                      <button type="submit" className="mt-2 btn btn-primary" disabled={isSubmitting}>
                        Update Package
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

export default EditPackage;
