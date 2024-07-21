import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { RotatingLines } from 'react-loader-spinner';



const Hero = () => {
  const [agencies, setAgencies] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/sliders');
        if (response.data.success) {
          setAgencies(response.data.agencies);
          console.log("date ::::::::::::" , response.data.agencies)
        } else {
          toast.error(response.data.error);
        }
      } catch (error) {
        console.error('Error fetching Sliderd:', error);
        toast.error('Failed to fetch sliders');
      }finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchAgencies();
  }, []);


  const options = {
    items: 5,
    loop: true,
    nav: true,
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
      <div className="home">
        <div className="home_slider_container">
          <OwlCarousel
            className="owl-theme home_slider"
            loop
            margin={10}
            nav
            items={1}
            dotsContainer=".home_slider_custom_dots"
            navText={[
              `<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="28px" height="33px" viewBox="0 0 28 33" enable-background="new 0 0 28 33" xml:space="preserve">
                <defs>
                  <linearGradient id='home_grad_prev'>
                    <stop offset='0%' stop-color='#fa9e1b'/>
                    <stop offset='100%' stop-color='#8d4fff'/>
                  </linearGradient>
                </defs>
                <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                C22.545,2,26,5.541,26,9.909V23.091z"/>
                <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                11.042,18.219 "/>
              </svg>`,
              `<svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="28px" height="33px" viewBox="0 0 28 33" enable-background="new 0 0 28 33" xml:space="preserve">
                <defs>
                  <linearGradient id='home_grad_next'>
                    <stop offset='0%' stop-color='#fa9e1b'/>
                    <stop offset='100%' stop-color='#8d4fff'/>
                  </linearGradient>
                </defs>
                <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                C22.545,2,26,5.541,26,9.909V23.091z"/>
                <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                17.046,15.554 "/>
              </svg>`
            ]}
          >
          {agencies.map((item, index) => (
  <div className="item home_slider_item" key={index}>
    <div 
      className="home_slider_background" 
      style={{ background: `url(http://localhost:8000/${item.sliderImage})` }}
    >
          <img src={`http://localhost:8000/${item.sliderImage}`} alt="" />

	</div>
    <div className="home_slider_content text-center">
      <div 
        className="home_slider_content_inner" 
        data-animation-in="flipInX" 
        data-animation-out="animate-out fadeOut"
      >
        <h1> Helloworld </h1>
        <h1>{item.title2}</h1>
        <div className="button home_slider_button">
          <div className="button_bcg"></div>
          <a href={item.link}>explore now<span></span><span></span><span></span></a>
        </div>
      </div>
    </div>
  </div>
))}
          </OwlCarousel>
          <div className="home_slider_dots">
            <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
              {agencies.map((_, index) => (
                <li className="home_slider_custom_dot" key={index}><div></div>{index + 1}.</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
