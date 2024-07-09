import React from 'react'
import Heading from '../Shared/Heading'

const TourSection = ({title}) => {
  return (
    
    <div className="intro">
    <div className="container">
        
             {/* heading component  */}

<Heading title="We have the best tours" />

        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="intro_text text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. </p>
                </div>
            </div>
        </div>
        <div className="row intro_items">

            {/* <!-- Intro Item --> */}

            <div className="col-lg-4 intro_col">
                <div className="intro_item">
                    <div className="intro_item_overlay"></div>
                    {/* <!-- Image by https://unsplash.com/@dnevozhai --> */}
                    <div className="intro_item_background" style={{backgroundImage:'url(images/intro_1.jpg)'}}></div>
                    <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                        <div className="intro_date">May 25th - June 01st</div>
                        <div className="button intro_button"><div className="button_bcg"></div><a href="#">see more<span></span><span></span><span></span></a></div>
                        <div className="intro_center text-center">
                            <h1>Mauritius</h1>
                            <div className="intro_price">From $1450</div>
                            <div className="rating rating_4">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Intro Item --> */}

            <div className="col-lg-4 intro_col">
                <div className="intro_item">
                    <div className="intro_item_overlay"></div>
                    
                    <div className="intro_item_background" style={{backgroundImage:'url(images/intro_2.jpg)'}}></div>
                    <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                        <div className="intro_date">May 25th - June 01st</div>
                        <div className="button intro_button"><div className="button_bcg"></div><a href="#">see more<span></span><span></span><span></span></a></div>
                        <div className="intro_center text-center">
                            <h1>Greece</h1>
                            <div className="intro_price">From $1450</div>
                            <div className="rating rating_4">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Intro Item --> */}

            <div className="col-lg-4 intro_col">
                <div className="intro_item">
                    <div className="intro_item_overlay"></div>
                    
                    <div className="intro_item_background" style={{backgroundImage:'url(images/intro_3.jpg)'}}></div>
                    <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                        <div className="intro_date">May 25th - June 01st</div>
                        <div className="button intro_button"><div className="button_bcg"></div><a href="#">see more<span></span><span></span><span></span></a></div>
                        <div className="intro_center text-center">
                            <h1>Scotland</h1>
                            <div className="intro_price">From $1450</div>
                            <div className="rating rating_4">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
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

export default TourSection