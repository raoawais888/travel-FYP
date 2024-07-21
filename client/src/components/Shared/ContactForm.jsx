import React from "react"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios"
import { toast } from "react-toastify";

import * as Yup from 'yup';

const ContactForm = () => {

	const initialValues = {
		contact_form_name: '',
		contact_form_email: '',
		contact_form_subject: '',
		contact_form_message: '',
	  };

	

const ContactSchema = Yup.object().shape({
  contact_form_name: Yup.string().required('Name is required.'),
  contact_form_email: Yup.string().email('Invalid email address.').required('Email is required.'),
  contact_form_subject: Yup.string().required('Subject is required.'),
  contact_form_message: Yup.string().required('Message is required.'),
});
	
	  const handleSubmit = (values, { resetForm }) => {
		// Make API call to store data in database (using axios)
		axios.post('http://localhost:8000/contact', values)
		  .then(response => {
			if(response.data.success){
				toast.success(response.data.message)
				resetForm();
			}else{
				toast.error(response.data.message)

			}
			
		  })
		  .catch(error => {
			console.error('Error sending data:', error);
		  });
	  };
  return (
 

						<Formik
                  initialValues={initialValues}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  <Form id="contact_form" className="contact_form text-center">
					<div className="row">

						<div className="col-md-6">

						<div className="form-group">
		
		
						<Field type="text" name="contact_form_name" className="form-control" placeholder="Name" />
						<ErrorMessage name="contact_form_name" component="p" className="text-danger" />
						</div>

						</div>

						<div className="col-md-6">
						<div className="form-group">
						<Field type="text" name="contact_form_email" className="form-control" placeholder="E-mail" />
						<ErrorMessage name="contact_form_email" component="p" className="text-danger" />
						</div>
						</div>
					</div>
					
         

              
                           <div className="row">
							<div className="col-md-12">
								<div className="form-group">
								<Field type="text" name="contact_form_subject" className="form-control" placeholder="Subject" />
								<ErrorMessage name="contact_form_subject" component="p" className="text-danger" />
								</div>
							</div>
						   </div>
                 

                               <div className="row">
								<div className="col-md-12">
									<div className="form-group">
									<Field as="textarea" name="contact_form_message" className="form-control" rows="4" placeholder="Message" />
									<ErrorMessage name="contact_form_message" component="p" className="text-danger" />
									</div>
								</div>
							   </div>
             

                    <button type="submit" className="form_submit_button button trans_200">send message<span></span><span></span><span></span></button>
                  </Form>
                </Formik>
				

           
    
  )
}

export default ContactForm