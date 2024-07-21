import React, { useState } from 'react';
import AdminMasterLayout from '../../AdminMasterLayout';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddSlider = () => {
    const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append('sliderImage', values.sliderImage);

    try {
      const response = await axios.post('http://localhost:8000/admin/sliders', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Slider added successfully:', response.data);

      if(response.data.success){
        toast.success(response.data.message)
        actions.resetForm();
        navigate("/admin/sliders")
      }else{
        toast.error(response.data.message)
      }
     
    } catch (error) {
        toast.error(error)
      console.error('Error adding slider:', error);
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    sliderImage: Yup.mixed()
      .required('Slider image is required')
      .test(
        'fileType',
        'Invalid file type. Only JPEG, PNG, or JPG allowed',
        (value) =>
          value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
      ),
  });

  return (
    <AdminMasterLayout>
      <div className="app-main__inner">
        {/* ... rest of your JSX ... */}
        <Formik
          initialValues={{ sliderImage: null }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <div className="position-relative form-group">
                <input
                  name="sliderImage"
                  type="file"
                  className="mr-2 form-control"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFieldValue('sliderImage', file);
                    setPreviewImage(file ? URL.createObjectURL(file) : null);
                  }}
                />
                <ErrorMessage name="sliderImage" component="p" className="text-danger" />
              </div>

              {previewImage && (
                <img src={previewImage} alt="Slider preview" height={200} width={200} className="img-thumbnail mb-3" />
              )}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </AdminMasterLayout>
  );
};

export default AddSlider;
