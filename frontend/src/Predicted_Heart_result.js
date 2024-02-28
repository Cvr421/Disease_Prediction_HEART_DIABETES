import React from "react";
import './Result.css'
// import { useState, useEffect } from "react";
// import axios from "axios";
export function Predicted_Heart_result ({predictedResult,advice_text,Impfeature=[], Impvalue=[]}) {
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