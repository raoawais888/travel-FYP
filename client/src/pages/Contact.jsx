import React from "react"
import MasterLyout from "../MasterLyout"
import Banner from "../components/Shared/Banner"

import ContactForm from "../components/Shared/ContactForm"

const Contact = () => {

	
  return (
    <MasterLyout>
      <Banner title="Contact" image="url(images/contact_background.jpg)" />


      <div className="contact_form_section">
		<div className="container">
			<div className="row">
				<div className="col">

					{/* <!-- Contact Form --> */}
					<div className="contact_form_container">
						<div className="contact_title text-center">get in touch</div>
						 <ContactForm />
					</div>

				</div>
			</div>
		</div>
	</div>


                   {/* about .................. */}

                   <div class="about">
		<div class="container">
			<div class="row">
				<div class="col-lg-5">
					
					{/* <!-- About - Image --> */}

					<div class="about_image">
						<img src="images/man.png" alt="" />
					</div>

				</div>

				<div class="col-lg-4">
					
					{/* <!-- About - Content --> */}

					<div class="about_content">
						<div class="logo_container about_logo">
							<div class="logo"><a href="#"><img src="images/logo.png" alt="" />travelix</a></div>
						</div>
						<p class="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula iaculis consequat nisl. Nunc et suscipit urna pretium.</p>
						<ul class="about_social_list">
							<li class="about_social_item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
							<li class="about_social_item"><a href="#"><i class="fa fa-facebook-f"></i></a></li>
							<li class="about_social_item"><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li class="about_social_item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
							<li class="about_social_item"><a href="#"><i class="fa fa-behance"></i></a></li>
						</ul>
					</div>

				</div>

				<div class="col-lg-3">
					
					{/* <!-- About Info --> */}

					<div class="about_info">
						<ul class="contact_info_list">
							<li class="contact_info_item d-flex flex-row">
								<div><div class="contact_info_icon"><img src="images/placeholder.svg" alt="" /></div></div>
								<div class="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
							</li>
							<li class="contact_info_item d-flex flex-row">
								<div><div class="contact_info_icon"><img src="images/phone-call.svg" alt="" /></div></div>
								<div class="contact_info_text">2556-808-8613</div>
							</li>
							<li class="contact_info_item d-flex flex-row">
								<div><div class="contact_info_icon"><img src="images/message.svg" alt="" /></div></div>
								<div class="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
							</li>
							<li class="contact_info_item d-flex flex-row">
								<div><div class="contact_info_icon"><img src="images/planet-earth.svg" alt="" /></div></div>
								<div class="contact_info_text"><a href="#">www.test.com</a></div>
							</li>
						</ul>
					</div>

				</div>

			</div>
		</div>
	</div>
    </MasterLyout>
  )
}

export default Contact