import React from 'react'
import MasterLyout from '../MasterLyout'
import Banner from '../components/Shared/Banner'
import { useFormik } from 'formik';
import UserSchema from '../Validations/UserValidation';
import ApiRequest from '../helper/ApiRequest';
import { toast } from 'react-toastify';

const Register = () => {

		const initialValues = {
			name: '',
			email: '',
			companyEmail: '',
			companyName: '',
			country: '',
			password: ''
		};

	const {values , errors , handleChange , handleSubmit , handleBlur }	= useFormik({
        initialValues:initialValues,
		validationSchema:UserSchema.register,
		onSubmit: async (values , {resetForm})=>{
		
			
			const resposne = await ApiRequest("/register",values);
              if(resposne.success){
				toast.success(resposne.message);

			  }else{
				toast.error(resposne.message);
			  }
		
			 resetForm(); 
			
		}

		})


  return (
   <MasterLyout>
<Banner title="Register" image="url(images/contact_background.jpg)" />

<div className="contact_form_section mb-5">
		<div className="container pb-5">
			<div className="row">
				<div className="col">

					{/* <!-- Contact Form --> */}
					<div className="contact_form_container">
						<div className="contact_title text-center">Register</div>
						<form  onSubmit={handleSubmit}  id="contact_form" className="contact_form text-center">

                            <div className="row">
								<div className="col-md-6 mb-3">
								<input type="text" id="name" className="input_field form-control" name='name' placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur}  />
								<p className='text-danger'>{errors.name} </p>
								</div>


								<div className="col-md-6 mb-3">
								<input type="email" id="email" name='email' className="contact_form_email form-control input_field" placeholder="E-mail" value={values.email} onChange={handleChange} onBlur={handleBlur} />
								<p className='text-danger'>{errors.email} </p>

								</div>


								<div className="col-md-6 mb-3">
								<input type="text" id="companyName" name='companyName' className="contact_form_name form-control input_field" placeholder="Company Name" value={values.companyName} onChange={handleChange}  onBlur={handleBlur} />
								<p className='text-danger'>{errors.companyName} </p>

								</div>





								<div className="col-md-6 mb-3">
								
							<input type="email" id="companyEmail" name='companyEmail' className="contact_form_email form-control input_field" placeholder="Company E-mail"  value={values.companyEmail} onChange={handleChange} onBlur={handleBlur} />

							<p className='text-danger'>{errors.companyEmail} </p>
								</div>


								<div className="col-md-6 mb-3">
								<input type="text" id="country" name='country' className="contact_form_name form-control input_field" placeholder="Country" value={values.country} onChange={handleChange} onBlur={handleBlur} />

								<p className='text-danger'>{errors.country} </p>
								</div>

								<div className="col-md-6 mb-3">
								<input type="password" id="password" name='password' className="contact_form_email form-control input_field" placeholder="Password" value={values.password} onChange={handleChange}  onBlur={handleBlur} />
								<p className='text-danger'>{errors.password} </p>


								</div>



							</div>
							
							






							

							
							
							<button type="submit" id="form_submit_button" className="form_submit_button button trans_200">send message<span></span><span></span><span></span></button>
						</form>
					</div>

				</div>
			</div>
		</div>
	</div>

   </MasterLyout>
  )
}

export default Register