import React from 'react'

const CopyRights = () => {
  return (
    <div className="copyright">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 order-lg-1 order-2  ">
					<div className="copyright_content d-flex flex-row align-items-center">
						<div>

  Copyright &copy;{new Date().getFullYear()} All rights reserved by <a href="#" target="_blank">Travelex</a>
</div>
					</div>
				</div>
				<div className="col-lg-9 order-lg-2 order-1">
					<div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
						<div className="footer_nav">
							<ul className="footer_nav_list">
								<li className="footer_nav_item"><a href="#">home</a></li>
								<li className="footer_nav_item"><a href="about.html">about us</a></li>
								<li className="footer_nav_item"><a href="offers.html">offers</a></li>
								<li className="footer_nav_item"><a href="blog.html">news</a></li>
								<li className="footer_nav_item"><a href="contact.html">contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default CopyRights