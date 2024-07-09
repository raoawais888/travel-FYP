import React from 'react'
const Filter = () => {
  return (
    <div className="col-lg-11">
					
					{/* <!-- Offers Sorting --> */}
					<div className="offers_sorting_container">
						<ul className="offers_sorting">
							<li>
								<span className="sorting_text">price</span>
								<i className="fa fa-chevron-down"></i>
								<ul>
									<li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }" data-parent=".price_sorting"><span>show all</span></li>
									<li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }" data-parent=".price_sorting"><span>ascending</span></li>
								</ul>
							</li>
							<li>
								<span className="sorting_text">location</span>
								<i className="fa fa-chevron-down"></i>
								<ul>
									<li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>default</span></li>
									<li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>alphabetical</span></li>
								</ul>
							</li>
							<li>
								<span className="sorting_text">stars</span>
								<i className="fa fa-chevron-down"></i>
								<ul>
									<li className="filter_btn" data-filter="*"><span>show all</span></li>
									<li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;stars&quot; }"><span>ascending</span></li>
									<li className="filter_btn" data-filter=".rating_3"><span>3</span></li>
									<li className="filter_btn" data-filter=".rating_4"><span>4</span></li>
									<li className="filter_btn" data-filter=".rating_5"><span>5</span></li>
								</ul>
							</li>
							<li className="distance_item">
								<span className="sorting_text">distance from center</span>
								<i className="fa fa-chevron-down"></i>
								<ul>
									<li className="num_sorting_btn"><span>distance</span></li>
									<li className="num_sorting_btn"><span>distance</span></li>
									<li className="num_sorting_btn"><span>distance</span></li>
								</ul>
							</li>
							<li>
								<span className="sorting_text">reviews</span>
								<i className="fa fa-chevron-down"></i>
								<ul>
									<li className="num_sorting_btn"><span>review</span></li>
									<li className="num_sorting_btn"><span>review</span></li>
									<li className="num_sorting_btn"><span>review</span></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
  )
}

export default Filter