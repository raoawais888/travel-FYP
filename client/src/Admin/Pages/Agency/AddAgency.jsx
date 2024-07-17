import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminMasterLayout from '../../AdminMasterLayout';

const AddAgency = () => {
  const initialValues = {
    agencyName: '',
    agencyEmail: '',
    agencyLogo: null,
    agencyAddress: '',
    agencyNumber: '',
    agencyPassword: '',
    role:2
  };

  const validationSchema = Yup.object({
    agencyName: Yup.string().required('Agency Name is required'),
    agencyEmail: Yup.string().email('Invalid email address').required('Email is required'),
    agencyLogo: Yup.mixed().required('Agency Logo is required'),
    agencyAddress: Yup.string().required('Agency Address is required'),
    agencyNumber: Yup.string().required('Agency Number is required'),
    agencyPassword: Yup.string().required('Agency Password is required')
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('agencyName', values.agencyName);
    formData.append('agencyEmail', values.agencyEmail);
    formData.append('agencyLogo', values.agencyLogo);
    formData.append('agencyAddress', values.agencyAddress);
    formData.append('agencyNumber', values.agencyNumber);
    formData.append('agencyPassword', values.agencyPassword);
    formData.append('role', values.role);

    try {
      const response = await axios.post('http://localhost:8000/admin/agencies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        resetForm();
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error('Error adding agency:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <AdminMasterLayout>
      <div className="app-main__inner">
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="fa-solid fa-building text-success"></i>
              </div>
              <div>Add Agency</div>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Add Agency</h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label htmlFor="agencyName">Agency Name</label>
                        <input
                          type="text"
                          id="agencyName"
                          name="agencyName"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.agencyName}
                        />
                        {formik.touched.agencyName && formik.errors.agencyName ? (
                          <div className="text-danger">{formik.errors.agencyName}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label htmlFor="agencyEmail">Agency Email</label>
                        <input
                          type="email"
                          id="agencyEmail"
                          name="agencyEmail"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.agencyEmail}
                        />
                        {formik.touched.agencyEmail && formik.errors.agencyEmail ? (
                          <div className="text-danger">{formik.errors.agencyEmail}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label htmlFor="agencyLogo">Agency Logo</label>
                        <input
                          type="file"
                          id="agencyLogo"
                          name="agencyLogo"
                          className="form-control"
                          onChange={(event) => formik.setFieldValue("agencyLogo", event.currentTarget.files[0])}
                        />
                        {formik.touched.agencyLogo && formik.errors.agencyLogo ? (
                          <div className="text-danger">{formik.errors.agencyLogo}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label htmlFor="agencyAddress">Agency Address</label>
                        <input
                          type="text"
                          id="agencyAddress"
                          name="agencyAddress"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.agencyAddress}
                        />
                        {formik.touched.agencyAddress && formik.errors.agencyAddress ? (
                          <div className="text-danger">{formik.errors.agencyAddress}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label htmlFor="agencyNumber">Agency Number</label>
                        <input
                          type="text"
                          id="agencyNumber"
                          name="agencyNumber"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.agencyNumber}
                        />
                        {formik.touched.agencyNumber && formik.errors.agencyNumber ? (
                          <div className="text-danger">{formik.errors.agencyNumber}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="position-relative form-group">
                        <label htmlFor="agencyPassword">Agency Password</label>
                        <input
                          type="password"
                          id="agencyPassword"
                          name="agencyPassword"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.agencyPassword}
                        />
                        {formik.touched.agencyPassword && formik.errors.agencyPassword ? (
                          <div className="text-danger">{formik.errors.agencyPassword}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <button className="mt-2 btn btn-primary" type="submit" disabled={formik.isSubmitting}>
                    Add Agency
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








export default AddAgency;

