import React from 'react'
import Heading from '../Shared/Heading'

const Offers = () => {
  return (
   
    <div className="offers">
		<div className="container">
		
        
                   <Heading title="the best offers with rooms" />

			<div className="row offers_items">		
			{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									{/* <!-- Image by Egzon Bytyqi --> */}
									<div className="offers_image_background" style={{backgroundImage:'url(images/offer_2.jpg)'}}></div>
									<div className="offer_name"><a href="#">turkey hills</a></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$50<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
											<li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
										</ul>
									</div>
									<div className="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									{/* <!-- Image by https://unsplash.com/@nevenkrcmarek --> */}
									<div className="offers_image_background" style={{backgroundImage:'url(images/offer_3.jpg)'}}></div>
									<div className="offer_name"><a href="#">island dream</a></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$90<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
											<li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
										</ul>
									</div>
									<div className="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6">
								<div className="offers_image_container">
									{/* <!-- Image by https://unsplash.com/@mantashesthaven --> */}
									<div className="offers_image_background" style={{backgroundImage:'url(images/offer_4.jpg)'}}></div>
									<div className="offer_name"><a href="#">travel light</a></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">$30<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
											<li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
										</ul>
									</div>
									<div className="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
  )
}

export default Offers