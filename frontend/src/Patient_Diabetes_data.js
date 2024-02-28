import React from 'react';
import { useState } from 'react'

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Predicted_Diabetes_result } from './Predicted_Diabetes_result';
import './Patient_data.css'
import CircularProgressWithLabel from './CircularWithValueLabel';


export function Patient_Diabetes_data() {

  const [loading, setLoading] = useState(false);
  
  const [Results, setResults] = useState(null); 
  
    

  const [DiabetesformData, setDiabetesFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: ''

  });

  const [predictedResult, setPredictedResult] = useState()
  const [DiabetesAdvice_text, setDiabetesAdvice_text] = useState()
  const [ImpDiabetesFeature, setImpDiabetesFeature] = useState([])
  const [ImpDiabetesValue, setImpDiabetesValue] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stringifiedData = JSON.stringify(DiabetesformData);

    try {
      const response = await fetch('http://localhost:5000/submit_form_diabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: stringifiedData
      });
      const data = await response.json();
      console.log(data); 
      setPredictedResult(data.pridicted_result);
      setDiabetesAdvice_text(data.advice_text);
      const features = data.importance_data.Feature;
      setImpDiabetesFeature(features);
      const value = data.importance_data.Importance;
      setImpDiabetesValue(value);
      setResults(data);
      // Handle response from server
    } catch (error) {
      console.error('Error:', error);
    }finally {
      // setLoading(false); // Set loading to false after response is received
      
      setTimeout(() => {
        setLoading(false);
      }, 5000);


    }
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiabetesFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

const handleReset =()=>{
  setDiabetesFormData({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: ''
  })
}







  return (
    <div className='data'>
      <div className='formdata'>
        <Form className="Diabetes_patientdata"  onSubmit={handleSubmit} >
          <div className="row">
          <Link className="link" to="/">Home</Link>
            <h5>DIABETES REPORT DETAIL</h5>
            <Form.Text className="text-muted">
              This is not for clinical Purpose / Please enter only number
            </Form.Text>
            <div className="col-sm">
              <Form.Group controlId="Pregnancies">
                <Form.Label>Pregnancies</Form.Label>
                <Form.Control 
               required={true}
                type="text" 
                placeholder="Male = 1/ female=0" 
                name='Pregnancies'
                value={DiabetesformData.Pregnancies}
                onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  No of Pregnancies
                </Form.Text>
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="Glucose">
                <Form.Label>Glucose: </Form.Label>
                <Form.Control 
                 required={true}
                type="text" 
                placeholder="In mg/dL"
                name='Glucose'
                value={DiabetesformData.Glucose}
                onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="BloodPressure">
                <Form.Label>Blood Pressure</Form.Label>
                <Form.Control 
                 required={true}
                type="text" 
                placeholder="In mm Hg"
                name='BloodPressure'
                value={DiabetesformData.BloodPressure}
                onChange={handleChange}
                 />
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="SkinThickness">
                <Form.Label>Skin Thickness:</Form.Label>
                <Form.Control 
                required={true}
                type="text" 
                placeholder=" In mm"
                name='SkinThickness'
                value={DiabetesformData.SkinThickness}
                onChange={handleChange}
                 />
                <Form.Text className="text-muted">
                  Triceps skinfold thickness
                </Form.Text>
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="Insulin">
                <Form.Label>Insulin:</Form.Label>
                <Form.Control 
                 required={true}
                 type="text"
                 placeholder="(In  μU/mL)" 
                 name='Insulin'
                 value={DiabetesformData.Insulin}
                 onChange={handleChange}
                 />
                <Form.Text className="text-muted">
                  Serum Insulin
                </Form.Text>
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="BMI">
                <Form.Label>BMI</Form.Label>
                <Form.Control 
                 required={true}
                type="text"
                 placeholder="kg/m^2" 
                 name='BMI'
                 value={DiabetesformData.BMI}
                 onChange={handleChange}
                 />
                <Form.Text className="text-muted">
                  Body mass index
                </Form.Text>
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="DiabetesPedigreeFunction">
                <Form.Label>DiabetesPedigreeFunction:</Form.Label>
                <Form.Control 
               required={true}
                type="text" 
                placeholder="Between 0 to 1" 
                name='DiabetesPedigreeFunction'
                value={DiabetesformData.DiabetesPedigreeFunction}
                onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Hereditary risk of Diabetes
                </Form.Text>
              </Form.Group>
            </div>
            <div className="col-sm-2">
              <Form.Group controlId="Age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
             required={true}
                type="text"
                 placeholder="Age" 
                 name='Age'
                 value={DiabetesformData.Age}
                 onChange={handleChange}
            
                 />
              </Form.Group>
            </div>

          </div>
          <Button variant="primary"  type="submit">
            Submit
          </Button>
          <Button  onClick={handleReset}>
            Reset
          </Button>
          
        </Form>

      </div>
      {loading ? (
        <div className="loading-container">
          <CircularProgressWithLabel value={0} />
        </div>
      ) : Results ?  (
        
        <Predicted_Diabetes_result   
        Results={Results} 
        predictedResult={predictedResult}  
        DiabetesAdvice_text={DiabetesAdvice_text} 
        ImpDiabetesFeature={ImpDiabetesFeature}  
        ImpDiabetesValue={ImpDiabetesValue} 
        />
      ): null}
  
    </div>
  );
}
