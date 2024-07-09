import React from 'react'
import MasterLyout from '../MasterLyout'
import Banner from '../components/Shared/Banner'

const Login = () => {
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
						<form action="#" id="contact_form" className="contact_form text-center">

							
							<input type="email" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Email"   />
							<input type="password" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Password"   />
							
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