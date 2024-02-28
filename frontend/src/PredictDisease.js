import React from 'react';
// import "./PredictDisease"
// import "./Navigation.css"

import svgimage1 from "./2753760.svg"
import img2 from "./img2.png"
const PredictDisease = () => {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Predict Heart Disease</h2>
          <p>AI and ML technologies hold immense promise in the medical field, particularly for disease prediction and prevention. By leveraging advanced algorithms and vast amounts of healthcare data, these technologies empower healthcare professionals to make more accurate diagnoses, develop personalized treatment plans, and improve patient outcomes</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <img width="100" height="100" viewBox="0 0 600 600" src={svgimage1} alt="My SVG Image" />

              </div>
              <span>Click 👇</span>
              <h4><a href="/patient_Heart_data">Predict Heart Disease</a></h4>
              <p>AI and ML technologies offer transformative opportunities to advance cardiovascular medicine by enhancing diagnosis, treatment, monitoring, and prediction of heart diseases. By leveraging these innovative tools, healthcare providers can deliver more personalized, efficient, and effective care to patients, ultimately improving heart health outcomes on a global scale.</p>
            </div>
          </div>




          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
              <img width="100" height="100" viewBox="0 0 600 600" src={img2} alt="My SVG Image" />

              </div>
              <span>Click 👇</span>
              <h4><a href="/patient_Diabetes_data">Predict Diabetes Disease</a></h4>

              <p>AI and ML technologies hold immense promise in transforming diabetes care by enabling early detection, personalized treatment, continuous monitoring, complication prevention, and population health management. By harnessing the power of data analytics and predictive modeling, healthcare providers can deliver more proactive, patient-centered, and cost-effective diabetes management strategies, ultimately improving outcomes and quality of life for individuals living with diabetes.</p>
            </div>
          </div>




          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <img width="100" height="100" viewBox="0 0 600 600" src={svgimage1} alt="My SVG Image" />

              </div>
              <span>Click 👇</span>
              <h4><a href="https://www.who.int/health-topics/cardiovascular-diseases#tab=tab_2">Article About Heart Disease</a></h4>
              <p>Cardiovascular diseases (CVDs) are the leading cause of death globally, taking an estimated 17.9 million lives each year. CVDs are a group of disorders of the heart and blood vessels and include coronary heart disease, cerebrovascular disease, rheumatic heart disease and other conditions. More than four out of five CVD deaths are due to heart attacks and strokes, and one third of these deaths occur prematurely in people under 70 years of age.</p>
            </div>
          </div>
        </div>







      </div>
    </section>
  );
};

export default PredictDisease;