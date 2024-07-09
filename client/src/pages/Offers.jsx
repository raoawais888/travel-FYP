import React from "react"
import MasterLyout from "../MasterLyout"
import Banner from "../components/Shared/Banner"
import Seaarch from "../components/Shared/Seaarch"
import OfferCard from "../components/Shared/OfferCard"

const Offers = () => {
  return (
    <MasterLyout>
        <Banner title="Our Offers" image="url(images/about_background.jpg)" />
        <Seaarch />

        <div className="container pb-5">
			<div className="row">
				<div className="col-lg-1 temp_col"></div>
				

				<div class="col-lg-12">
					{/* <!-- Offers Grid --> */}

					<div class="offers_grid">

						{/* <!-- Offers Item ..................................--> */}
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
						{/* <!-- Offers Item ..................................--> */}

						

					</div>
				</div>

			</div>
		</div>



    </MasterLyout>
  )
}

export default Offers