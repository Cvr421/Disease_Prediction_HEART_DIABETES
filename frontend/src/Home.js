import React from 'react';
import Header from "./Header"
import Herosection from "./Herosection"
import PredictDisease from './PredictDisease';
import Footer from './Footer';
import "./Navigation.css"
import "./vendor/animate.css/animate.min.css"
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/bootstrap-icons/bootstrap-icons.css"
import "./vendor/boxicons/css/boxicons.min.css"
import "./vendor/glightbox/css/glightbox.min.css"
import "./vendor/swiper/swiper-bundle.min.css"


function Home() {
    return (
      <div>
        {/* first git  */}
       <Header/>
       {/* second git */}
       <Herosection/>
       {/* third git  */}
       <PredictDisease/>
       {/* fourth git  */}
       <Footer/>
      </div>
    );
  }
  
export default Home;
  