import React, { useState } from 'react';
import AdminMasterLayout from '../../AdminMasterLayout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      featureImage: null,
      description: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      featureImage: Yup.mixed().required('Feature image is required'),
      description: Yup.string().required('Description is required')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('featureImage', values.featureImage);
      formData.append('description', values.description);

      try {
        const response = await axios.post('http://localhost:8000/admin/blogs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.success) {
          toast.success('Blog post created successfully!');
          resetForm();
          setImagePreview(null);
          navigate("/admin/blogs")
           
        } else {
          toast.error(response.data.error);
        }
      } catch (error) {
        toast.error('Error creating blog post');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue('featureImage', file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <AdminMasterLayout>
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="fa-solid fa-building text-success"></i>
              </div>
              <div>Add Blog</div>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Add Agency</h5>
               
                <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h2>Add New Blog Post</h2>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  isInvalid={formik.touched.title && formik.errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.title}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="featureImage">
                <Form.Label>Feature Image</Form.Label>
                <Form.Control
                  type="file"
                  name="featureImage"
                  onChange={handleImageChange}
                  isInvalid={formik.touched.featureImage && formik.errors.featureImage}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.featureImage}
                </Form.Control.Feedback>
                {imagePreview && (
                  <div className="mt-2">
                    <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '100%' }} />
                  </div>
                )}
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <ReactQuill
                  value={formik.values.description}
                  onChange={(value) => formik.setFieldValue('description', value)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-danger">{formik.errors.description}</div>
                ) : null}
              </Form.Group>

              <Button type="submit" className='mt-2' disabled={formik.isSubmitting}>
                Add Blog Post
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </AdminMasterLayout>
  );
};

export default AddBlog;
