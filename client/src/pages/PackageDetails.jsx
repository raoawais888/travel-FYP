import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import MasterLyout from "../MasterLyout";
import Banner from "../components/Shared/Banner";
import Seaarch from "../components/Shared/Seaarch";
import axios from 'axios';
import moment from 'moment';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { RotatingLines } from 'react-loader-spinner';

const PackageDetails = () => {
  const [data, setData] = useState({ images: [] });
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  const { packageId } = useParams();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/packages/${packageId}`);
        const packageData = response.data.package;
        setData(packageData);
      } catch (error) {
        console.error('Error fetching package:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchPackage();
  }, [packageId]);

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
    <MasterLyout>
      <Banner title="Our Offers" image="url(/images/about_background.jpg)" />
      <Seaarch />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single_listing">
              {/* Hotel Info */}
              <div className="hotel_info">
                {/* Title */}
                <div className="hotel_title_container d-flex flex-lg-row flex-column">
                  <div className="hotel_title_content">
                    <h1 className="hotel_title">{data.location}</h1>
                  </div>
                  <div className="hotel_title_button ml-lg-auto text-lg-right">
                    <div className="button book_button trans_200">
                      <NavLink to={`/book-now/${data._id}`}> book<span></span><span></span><span></span></NavLink>
                    </div>
                  </div>
                </div>

                {/* Listing Image */}
                {data.images && data.images.length > 0 && (
                  <div className="hotel_image">
                    <img src={`http://localhost:8000/${data.images[0]}`} alt="" />
                    <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                      <div className="hotel_review">
                        <div className="hotel_review_content">
                          <div className="hotel_review_title">very good</div>
                          <div className="hotel_review_subtitle">100 reviews</div>
                        </div>
                        <div className="hotel_review_rating text-center">8.1</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hotel Gallery */}
                {data.images && data.images.length > 0 && (
                  <div className="hotel_gallery">
                    <div className="hotel_slider_container">
                      <OwlCarousel className="owl-theme" {...options}>
                        {data.images.map((image, index) => (
                          <div key={index} className="item">
                            <a className="colorbox cboxElement" href={`http://localhost:8000/${image}`}>
                              <img src={`http://localhost:8000/${image}`} alt={`Image ${index}`} />
                            </a>
                          </div>
                        ))}
                      </OwlCarousel>
                      <div className="hotel_slider_nav hotel_slider_prev">
                        <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                          <defs>
                            <linearGradient id='hotel_grad_prev'>
                              <stop offset='0%' stopColor='#fa9e1b' />
                              <stop offset='100%' stopColor='#8d4fff' />
                            </linearGradient>
                          </defs>
                          <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                        M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                        C22.545,2,26,5.541,26,9.909V23.091z"/>
                          <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                        11.042,18.219 "/>
                        </svg>
                      </div>

                      <div className="hotel_slider_nav hotel_slider_next">
                        <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                          <defs>
                            <linearGradient id='hotel_grad_next'>
                              <stop offset='0%' stopColor='#fa9e1b' />
                              <stop offset='100%' stopColor='#8d4fff' />
                            </linearGradient>
                          </defs>
                          <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                        M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                        C22.545,2,26,5.541,26,9.909V23.091z"/>
                          <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                        17.046,15.554 "/>
                        </svg>
                      </div>

                    </div>
                  </div>
                )}

                {/* Hotel Info Text */}
                <div className="hotel_info_text">
                  <h4>Other Details</h4>
                  <b>Price : </b> $ {data.price}
                  <p> {data.description} </p>
                  <b>Dates : </b> {`${moment(data.startDate).format('YYYY-MM-DD')}  To  ${ moment(data.endDate).format('YYYY-MM-DD') }`}

                  <h4>Agency Detail</h4>
                  {data.agencyId ? (
                    <>
                      <b>Agency Name : </b>  {data.agencyId.agencyName}  <br />
                      <b>Agency Address : </b>  {data.agencyId.agencyAddress} <br />
                      <b>Agency Number : </b>  {data.agencyId.agencyNumber}
                    </>
                  ) : (
                    <p>No agency details available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLyout>
  );
}

export default PackageDetails;
