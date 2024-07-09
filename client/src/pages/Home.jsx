import React from 'react'
import Header from '../components/Shared/Header'
import MasterLyout from '../MasterLyout'
import Hero from '../components/Home/Hero'
import Seaarch from '../components/Shared/Seaarch'
import TourSection from '../components/Home/TourSection'
import Offers from '../components/Home/Offers'
import Packages from "../components/Shared/Packages"
import Testimonial from '../components/Home/Testimonial'
import Trending from '../components/Home/Trending'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
    <MasterLyout >
    <Hero />
    <Seaarch />
    <TourSection />
    <Packages />
       <Offers />
       <Testimonial />
       <Trending />
       <Contact />
       


    </MasterLyout>

    

    </>
  )
}

export default Home