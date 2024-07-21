import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
const Packages = () => {
    const [agencies, setAgencies] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const navigate = useNavigate();
useEffect(() => {
  const fetchAgencies = async () => {
    try {
      const response = await axios.get('http://localhost:8000/admin/testimonials');
      if (response.data.success) {
        setAgencies(response.data.agencies);
        //   console.log("date ::::::::::::" , response.data.agencies) 
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error('Error fetching agencies:', error);
      toast.error('Failed to fetch agencies');
    }finally {
        setLoading(false); // Set loading to false after data is fetched
      }
  };

  fetchAgencies();
}, []);
    const options = {
        items: 1,
        loop: true,
        nav: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      };

      if (loading) {
        return (
          <div className="loader-container">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        );
      }
  return (
    <div className="cta">
    {/* <!-- Image by https://unsplash.com/@thanni --> */}
    <div className="cta_background" style={{backgroundImage:'url(images/cta.jpg)'}}></div>
    
    <div className="container">
        <div className="row">
            <div className="col">

                {/* <!-- CTA Slider --> */}

                <div className="cta_slider_container">

                <OwlCarousel className="owl-theme" {...options}>

                {agencies.map((testimonial, index) => (
                       
                       <div className="item cta_item text-center">
                       <div className="cta_title">{testimonial.name}</div>
                       
                       <p className="cta_text">{testimonial.testimonial} </p>
                       <div className="button cta_button"><div className="button_bcg"></div><a href="#">book now<span></span><span></span><span></span></a></div>
                   </div>
   ))}
               

    </OwlCarousel>
                    
                
                    
              

                </div>

            </div>
        </div>
    </div>
                
</div>
  )
}

export default Packages