import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
const Testimonial = () => {

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
    items: 3,
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
	<>
	
	<div class="testimonials">
		<div class="test_border"></div>
		  <div class="container">
			<div class="row">
				<div class="col text-center">
					<h2 class="section_title">what our clients say about us</h2>
				</div>
			</div>
			<div class="row">
				<div class="col">
					
					{/* <!-- Testimonials Slider --> */}
					<OwlCarousel className="owl-theme" {...options}> 

					{agencies.map((testimonial, index) => (
                       
					   <div class="item">
								<div class="test_item">
									<div class="test_image"><img src="images/test_1.jpg" alt="https://unsplash.com/@anniegray" /></div>
									<div class="test_icon"><img src="images/backpack.png" alt="" /></div>
									<div class="test_content_container">
										<div class="test_content">
											<div class="test_item_info">
												<div class="test_name">{testimonial.name}</div>
												<div class="test_date">{testimonial.createdAt} </div>
											</div>
											<div class="test_quote_title">" Best holliday ever "</div>
											<p class="test_quote_text">{testimonial.testimonial}</p>
										</div>
									</div>
								</div>
							</div>
   ))}
              </OwlCarousel>

					</div>
					
				</div>
			</div>

		</div>
	
	</>
	
  )
}

export default Testimonial