import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Predict Disease</h3>
        <p>We uses the Hundered of real Heart and Diabetes patient data to predict that patient have this disease or not using different Machine Learning Algorithm like Decision tree classifier , Neural network and Super vector Machine(SVM)
          Logistic Regression and Random Forest classifier to process the data and find the accuracy of prediction..</p>
        <div className="copyright">
          &copy; Copyright <strong><span>Predict Disease Using ML</span></strong>. All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;