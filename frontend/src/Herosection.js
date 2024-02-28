import React from 'react';
// import './Navigation.css'
import img3 from "./img3.jpg"

const Herosection = () => {
  return (
    <section id="hero">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          {/* Slide 1 */}
          <div className="carousel-item active" >
            <img  src={img3} alt="pic" />
           
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">Predict <span>Heart Diabetes</span> Disease</h2>
                <p className="animate__animated animate__fadeInUp">
                  We uses the Hundered of real Heart and Diabetes patient data to predict that patient have this disease or not using different Machine Learning Algorithm like Decision tree classifier , Neural network and Super vector Machine(SVM)
                  Logistic Regression and Random Forest classifier to process the data and find the accuracy of prediction.
                </p>

              </div>
            </div>
          </div>





        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </section>
  );
};

export default Herosection;