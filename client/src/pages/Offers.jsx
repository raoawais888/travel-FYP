import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages } from '../store/packagesSlice';
import { useNavigate } from 'react-router-dom';
import MasterLyout from "../MasterLyout"
import Banner from "../components/Shared/Banner"
import Seaarch from "../components/Shared/Seaarch"
import OfferCard from "../components/Shared/OfferCard"

const Offers = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { packages, totalPages, status, error } = useSelector((state) => state.packages);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPackages({ page, searchTerm }));
  }, [page, searchTerm, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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
                         

            {packages.map((pkg) => (
               <OfferCard  data={pkg} />
        ))}

                       
                        
						{/* <!-- Offers Item ..................................--> */}

						

					</div>
				</div>

			</div>
		</div>



    </MasterLyout>
  )
}

export default Offers