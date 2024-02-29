import React from 'react';
import { useState } from 'react'
import './Patient_data.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Predicted_Heart_result } from "./Predicted_Heart_result"
import CircularProgressWithLabel from './CircularWithValueLabel';
import HomeIcon from './HomeIcon';

export function Patient_Heart_data() {
  const [loading, setLoading] = useState(false); 
  const [Results, setResults] = useState(null); 


  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    chestPain: '',
    trtbps: '',
    cholesterol: '',
    fbs: '',
    restECG: '',
    thalachh: '',
    exng: '',
    oldPeak: '',
    slp: '',
    caa: '',
    thallium: ''
  });

  const [predictedResult, setPredictedResult] = useState(null)
  const [advice_text, setAdviceText] = useState()
  const [Impfeature, setImpfeature] = useState([])
  const [Impvalue, setImpValue] = useState([])

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stringifiedData = JSON.stringify(formData);

    try {
      const response = await fetch('http://localhost:5000/submit_form_heart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: stringifiedData
      });
      const data = await response.json();
      setPredictedResult(data.pridicted_result);
      setAdviceText(data.advice_text);
      const features = data.importance_data.Feature;
      setImpfeature(features);
      const value = data.importance_data.Importance;
      setImpValue(value);
      setResults(data);
      console.log(data); // Handle response from server
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handleReset = () => {
    setFormData({
      age: '',
      sex: '',
      chestPain: '',
      trtbps: '',
      cholesterol: '',
      fbs: '',
      restECG: '',
      thalachh: '',
      exng: '',
      oldPeak: '',
      slp: '',
      caa: '',
      thallium: ''
    });

  }



  return (
    <>
      <div className='data'>
        <div className='formdata'>
          <Form className="patientdata"   onSubmit={handleSubmit}>
            <div className="row">
              {/* <Link className="link" to="/">Home</Link> */}
              <HomeIcon  />
              <h5>HEART REPORT DETAIL</h5>
              <Form.Text className="text-muted">
                This is not for clinical Purpose / Please enter only number
              </Form.Text>
              <div className="col-sm">
                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Age"
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                  />

                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="sex">
                  <Form.Label>Sex</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder=" Sex "
                    name='sex'
                    value={formData.sex}
                    onChange={handleChange}

                  />
                  <Form.Text className="text-muted">
                    Male=1 / Female=0
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="chestPain">
                  <Form.Label>Chest Pain</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Between 0 to 3"
                    name='chestPain'
                    value={formData.chestPain}
                    onChange={handleChange}

                  />
                  <Form.Text className="text-muted">
                    Chest Pain
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="trtbps">
                  <Form.Label>TRTBPS</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder=" In (mm Hg)"
                    name='trtbps'
                    value={formData.trtbps}
                    onChange={handleChange}

                  />
                  <Form.Text className="text-muted">
                    Resting Blood Pressure
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="cholesterol">
                  <Form.Label>Cholesterol</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="(in mg/dL)"
                    name='cholesterol'
                    value={formData.cholesterol}
                    onChange={handleChange}

                  />

                  <Form.Text className="text-muted">
                    cholesterol level
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="fbs">
                  <Form.Label>FBS.</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Between 0 to 1"
                    name='fbs'
                    value={formData.fbs}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    Fasting blood sugar level (in mg/dL)/
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="restECG">
                  <Form.Label>Rest ECG</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Between 0 to 1"
                    name='restECG'
                    value={formData.restECG}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    Resting ECG results
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="thalachh">
                  <Form.Label>Thalachh</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="THALACHH"
                    name='thalachh'
                    value={formData.thalachh}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    Maximum heart rate achieved during exercise
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="exng">
                  <Form.Label>EXNG</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Betweem 0 to 1"
                    name='exng'
                    value={formData.exng}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    Exercise-induced angina
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="oldpeak">
                  <Form.Label>OldPeak</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Between 0 to 10"
                    name='oldPeak'
                    value={formData.oldPeak}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    Abnormality in ECG
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="slp">
                  <Form.Label>SLP</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Between 0 to 2"
                    name='slp'
                    value={formData.slp}
                    onChange={handleChange} />
                  <Form.Text className="text-muted">
                    Indicate the severity of Ischemia
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="caa">
                  <Form.Label>CAA</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Betweem 0 to 3"
                    name='caa'
                    value={formData.caa}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    Coronary artery disease.
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-sm-2">
                <Form.Group controlId="thallium">
                  <Form.Label>Thallium</Form.Label>
                  <Form.Control
                    required={true}
                    type="text"
                    placeholder="Between 0 to 3"
                    name='thallium'
                    value={formData.thallium}
                    onChange={handleChange}

                  />
                  <Form.Text className="text-muted">
                    Thallium stress test
                  </Form.Text>
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={handleReset}>
              Reset
            </Button>
          </Form>

        </div>

      </div>
      {loading ? (
        <div className="loading-container">
          <CircularProgressWithLabel value={0} />
        </div>
      ) : Results ?  (
      <Predicted_Heart_result 
      Results={Results} 
      predictedResult={predictedResult} 
      advice_text={advice_text} 
      Impfeature={Impfeature} 
      Impvalue={Impvalue} />
      ): null}
    </>
  );
}
