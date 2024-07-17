import React from 'react'
import MasterLyout from '../MasterLyout'
import Banner from '../components/Shared/Banner'
import { useFormik } from 'formik';
import UserSchema from '../Validations/UserValidation';
import ApiRequest from '../helper/ApiRequest';
import { toast } from 'react-toastify';

const Login = () => {

	
	const initialValues = {
		email: '',
		password: ''
	};

const {values , errors , handleChange , handleSubmit , handleBlur }	= useFormik({
	initialValues:initialValues,
	validationSchema:UserSchema.login,
	onSubmit: async (values , {resetForm})=>{
	
		
		const resposne = await ApiRequest("/login",values);
		  if(resposne.success){
			toast.success(resposne.message);
			localStorage.setItem('token', resposne.token);
			localStorage.setItem('user', JSON.stringify(resposne.user));

		  }else{
			toast.error(resposne.message);
		  }
	
		 resetForm(); 
		
	}

	})

  return (
   <MasterLyout>
      <Banner title="Login" image="url(images/contact_background.jpg)" />
  
      <div className="contact_form_section mb-5">
		<div className="container pb-5">
			<div className="row">
				<div className="col-md-6 mx-auto">

					{/* <!-- Contact Form --> */}
					<div className="contact_form_container">
						<div className="contact_title text-center">Login</div>
						<form  onSubmit={handleSubmit} id="contact_form" className="contact_form text-center">

							
							
						
								<input type="email" id="email" name='email' className="contact_form_email form-control input_field" placeholder="E-mail" value={values.email} onChange={handleChange} onBlur={handleBlur} />
								<p className='text-danger'>{errors.email} </p>

								


								<input type="password" id="password" name='password' className="contact_form_email form-control input_field" placeholder="Password" value={values.password} onChange={handleChange}  onBlur={handleBlur} />
								<p className='text-danger'>{errors.password} </p>
							
							<button type="submit" id="form_submit_button" className="form_submit_button button trans_200">Login<span></span><span></span><span></span></button>
						</form>
					</div>

				</div>
			</div>
		</div>
	</div>

   </MasterLyout>
  )
}

export default Login