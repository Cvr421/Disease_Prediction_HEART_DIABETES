import React, { useState } from "react";
import './Result.css'




export function Predicted_Diabetes_result ({predictedResult,DiabetesAdvice_text,ImpDiabetesFeature=[],ImpDiabetesValue=[]}) {


  return (
   <>
    <div className="result">
    <div className="result">
      <h2>Predicted Result</h2>
       <h3>
       {predictedResult !== null ? predictedResult : "Predict Your Diabetes using Machine Learning Algorithm "}
       </h3>
       <h6>
        {DiabetesAdvice_text}
       </h6>
       <span>Feature that are contributing most to have a Diabetes</span>
       <div className="value">
        
        <ul>
          {Object.entries(ImpDiabetesFeature).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          ))}
        </ul>
        <span>
          {Object.entries(ImpDiabetesValue).map(([key, value]) => (
            <li key={key}>
             {value} <span>%</span>
             </li>
          ))}
        </span>
       </div>
    </div>

    </div>
  
  </>


  );
}
