import React from 'react'
import ContactForm from '../Shared/ContactForm'
const Contact = () => {
  return (
    <>
    	<div className="contact">
		<div className="contact_background" style={{backgroundImage:'url(images/contact.png)'}}></div>

		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					<div className="contact_image">
						
					</div>
				</div>
				<div className="col-lg-7">
					<div className="contact_form_container">
						<div className="contact_title">get in touch</div>
						<ContactForm />
					
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Contact