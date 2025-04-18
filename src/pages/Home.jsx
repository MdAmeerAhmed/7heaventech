import React from 'react'
//import ContactUs from './ContactUs';
import LastestProduct from '../Component/LastestProduct';
import OurClient from '../Component/OurClient';
import ServiceCards from '../Component/ServiceCard';
import Carousel from '../Component/Carousel';
import Approach from '../Component/Approach';
import Contact from '../Component/contact';
import ScrollToTop from '../ScrollToTop';

function Home() {
  return (
    <>
    <Carousel />
    <Approach />
    <LastestProduct />
    <OurClient />
    <ServiceCards />
    <Contact />
       <ScrollToTop />
    </>
  )
}

export default Home