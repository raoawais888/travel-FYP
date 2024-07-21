import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages } from '../../store/packagesSlice';
import { useNavigate } from 'react-router-dom';
import OfferCard from "../../components/Shared/OfferCard"
import Heading from '../Shared/Heading';

const TourSection = ({title}) => {

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
    
    <div className="intro">
    <div className="container">
        
             {/* heading component  */}

<Heading title="We have the best Packages" />

        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="intro_text text-center">
                
                </div>
            </div>
        </div>
        <div className="row intro_items">

            {/* <!-- Intro Item --> */}

            

            {/* <!-- Intro Item --> */}

            {/* <!-- Intro Item --> */}

            <div className="col-lg-6 intro_col">
               
            {packages.map((pkg) => (
               <OfferCard  data={pkg} />
        ))}


            </div>

        </div>
    </div>
</div>
  )
}

export default TourSection