import React from 'react'

const Stats = () => {
  return (
    <div className="stats">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title">years statistics</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 offset-lg-1 text-center">
					<p className="stats_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. </p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="stats_years">
						<div className="stats_years_last">2016</div>
						<div className="stats_years_new float-right">2017</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="stats_contents">
						
						{/* <!-- Stats Item --> */}
						<div className="stats_item d-flex flex-md-row flex-column clearfix">
							<div className="stats_last order-md-1 order-3">
								<div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_1.png" alt="" />
								</div>
								<div className="stats_last_content">
									<div className="stats_number">1642</div>
									<div className="stats_type">Clients</div>
								</div>
							</div>
							<div className="stats_bar order-md-2 order-2" data-x="1642" data-y="3527" data-color="#31124b">
								<div className="stats_bar_perc">
									<div>
										<div className="stats_bar_value"></div>
									</div>
								</div>
							</div>
							<div className="stats_new order-md-3 order-1 text-right">
								<div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_1.png" alt="" /> 
								</div>
								<div className="stats_new_content">
									<div className="stats_number">3527</div>
									<div className="stats_type">Clients</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Stats Item --> */}
						<div className="stats_item d-flex flex-md-row flex-column clearfix">
							<div className="stats_last order-md-1 order-3">
								<div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_2.png" alt="" />
								</div>
								<div className="stats_last_content">
									<div className="stats_number">768</div>
									<div className="stats_type">Returning Clients</div>
								</div>
							</div>
							<div className="stats_bar order-md-2 order-2" data-x="768" data-y="145" data-color="#a95ce4">
								<div className="stats_bar_perc">
									<div>
										<div className="stats_bar_value"></div>
									</div>
								</div>
							</div>
							<div className="stats_new order-md-3 order-1 text-right">
								<div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_2.png" alt="" />
								</div>
								<div className="stats_new_content">
									<div className="stats_number">145</div>
									<div className="stats_type">Returning Clients</div>
								</div>
							</div>
						</div>

						{/* <!-- Stats Item --> */}
						<div className="stats_item d-flex flex-md-row flex-column clearfix">
							<div className="stats_last order-md-1 order-3">
								<div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_3.png" alt="" />
								</div>
								<div className="stats_last_content">
									<div className="stats_number">11546</div>
									<div className="stats_type">Reach</div>
								</div>
							</div>
							<div className="stats_bar order-md-2 order-2" data-x="11546" data-y="9321" data-color="#fa6f1b">
								<div className="stats_bar_perc">
									<div>
										<div className="stats_bar_value"></div>
									</div>
								</div>
							</div>
							<div className="stats_new order-md-3 order-1 text-right">
								<div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_3.png" alt="" />
								</div>
								<div className="stats_new_content">
									<div className="stats_number">9321</div>
									<div className="stats_type">Reach</div>
								</div>
							</div>
						</div>

						{/* <!-- Stats Item --> */}
						<div className="stats_item d-flex flex-md-row flex-column clearfix">
							<div className="stats_last order-md-1 order-3">
								<div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_4.png" alt="" />
								</div>
								<div className="stats_last_content">
									<div className="stats_number">3729</div>
									<div className="stats_type">Items</div>
								</div>
							</div>
							<div className="stats_bar order-md-2 order-2" data-x="3729" data-y="17429" data-color="#fa9e1b">
								<div className="stats_bar_perc">
									<div>
										<div className="stats_bar_value"></div>
									</div>
								</div>
							</div>
							<div className="stats_new order-md-3 order-1 text-right">
								<div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
									<img src="images/stats_4.png" alt="" />
								</div>
								<div className="stats_new_content">
									<div className="stats_number">17429</div>
									<div className="stats_type">More Items</div>
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

export default Stats