import React from "react";
import './Result.css'
// import { useState, useEffect } from "react";
// import axios from "axios";
export function Predicted_Heart_result ({predictedResult,advice_text,Impfeature=[], Impvalue=[]}) {


  // const [predictedResult, setPredictedResult]=useState(null)



  // Function to fetch data from Flask backend
// useEffect(() => {
//     fetch('http://localhost:5000/submit_form', {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json',
//         accept: 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log("Received data from server:", data); // Check if data is received
//       setPridictedResult(data.pridicted_result);
//     })
  
  

//     .catch(error => console.error('Error:', error));
//   }, []);  

//  const fetchData = async() => {
//     try {
//       const response = await fetch('http://localhost:5000/submit_form', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: 'application/json'
//         },
       
       
//       });
  
//       if (!response.ok) {
//         // Handle specific error responses (e.g., 400, 404, etc.)
//         const errorBody = await response.json(); // or text()
//         console.error("Error:", errorBody);
//         // Optionally display user-friendly error message
//         return;
//       }
  
//       const data = await response.json();
//       setPredictedResult(data.pridicted_result);
//     } catch (error) {
//       console.error("Error while fetching: ", error);
//     }
//   }
//   useEffect(()=>{
//     fetchData();
//   },[])
 
   


  return (
    <>
    <div className="result">
      <h2>Predicted Result</h2>
       <h3>
       {predictedResult!== null ? predictedResult : "Predict Your Heart Disease using Machine Learning Algorithm "}
       </h3>
       <h6>
        {advice_text}
       </h6>
       <div className="value">
        <ul>
          {Object.entries(Impfeature).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          ))}
        </ul>
        <span>
          {Object.entries(Impvalue).map(([key, value]) => (
            <li key={key}>
             {value}
             </li>
          ))}
        </span>
       </div>
    </div>

    </>
  );
}