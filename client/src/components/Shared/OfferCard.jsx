import React from 'react'
import { NavLink } from 'react-router-dom'

const OfferCard = ({data}) => {
  return (
    <div class="offers_item rating_4">
							<div class="row">
								<div class="col-lg-1 temp_col"></div>
								<div class="col-lg-3 col-1680-4">
									<div class="offers_image_container">
										{/* <!-- Image by https://unsplash.com/@kensuarez --> */}
										{data.images && data.images.length > 0 && (
														<div
															className="offers_image_background">

																<img src={`http://localhost:8000/${data.images[0]}`} alt="" />
															
														</div>
														)}
																								<div class="offer_name"><NavLink to={`/package-details/${data._id}`}>{data.location} </NavLink></div>
									</div>
								</div>
								<div class="col-lg-8">
									<div class="offers_content">
										<div class="offers_price">${data.price} <span>per night</span></div>
										
										<p class="offers_text">{data.description} </p>
										<div class="offers_icons">
											<ul class="offers_icons_list">
												<li class="offers_icons_item"><img src="images/post.png" alt="" /></li>
												<li class="offers_icons_item"><img src="images/compass.png" alt="" /></li>
												<li class="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
												<li class="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
											</ul>
										</div>
										<div class="button book_button"><NavLink  to={`/package-details/${data._id}`}  >More Details<span></span><span></span><span></span></NavLink></div>
										{/* <div class="offer_reviews">
											<div class="offer_reviews_content">
												<div class="offer_reviews_title">very good</div>
												<div class="offer_reviews_subtitle">100 reviews</div>
											</div>
											<div class="offer_reviews_rating text-center">8.1</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
  )
}

export default OfferCard