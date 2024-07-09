import React from 'react'
const Footer = () => {
  return (
    <footer className="footer">
		<div className="container">
			<div className="row">
				{/* <!-- Footer Column --> */}				
                <div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_content footer_about">
							<div className="logo_container footer_logo">
								<div className="logo"><a href="#"><img src="images/logo.png" alt="" />travelix</a></div>
							</div>
							<p className="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
							<ul className="footer_social_list">
								<li className="footer_social_item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
								<li className="footer_social_item"><a href="#"><i className="fa fa-facebook-f"></i></a></li>
								<li className="footer_social_item"><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li className="footer_social_item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
								<li className="footer_social_item"><a href="#"><i className="fa fa-behance"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				
                <div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">blog posts</div>
						<div className="footer_content footer_blog">
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_1.jpg" alt="https://unsplash.com/@avidenov" /></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_2.jpg" alt="https://unsplash.com/@deannaritchie" /></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><a href="blog.html">New destinations for you</a></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_3.jpg" alt="https://unsplash.com/@bergeryap87" /></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">tags</div>
						<div className="footer_content footer_tags">
							<ul className="tags_list clearfix">
								<li className="tag_item"><a href="#">design</a></li>
								<li className="tag_item"><a href="#">fashion</a></li>
								<li className="tag_item"><a href="#">music</a></li>
								<li className="tag_item"><a href="#">video</a></li>
								<li className="tag_item"><a href="#">party</a></li>
								<li className="tag_item"><a href="#">photography</a></li>
								<li className="tag_item"><a href="#">adventure</a></li>
								<li className="tag_item"><a href="#">travel</a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">contact info</div>
						<div className="footer_content footer_contact">
							<ul className="contact_info_list">
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/placeholder.svg" alt="" /></div></div>
									<div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/phone-call.svg" alt="" /></div></div>
									<div className="contact_info_text">2556-808-8613</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/message.svg" alt="" /></div></div>
									<div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt="" /></div></div>
									<div className="contact_info_text"><a href="#">www.test.com</a></div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</footer>
  )
}

export default Footer