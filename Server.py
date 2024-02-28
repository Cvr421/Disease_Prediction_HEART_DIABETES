import numpy as np 
import pandas as pd 
from flask import Flask, jsonify
from flask_cors import CORS 

from Diabetes_Disease_Prediction import diabetes_prediction
from Heart_Disease_prediction import submit_form
app = Flask(__name__)
CORS(app)

@app.route('/submit_form_heart',methods=['POST'])
def predict_heart():
    return submit_form()

@app.route('/submit_form_diabetes', methods=['POST'])
def pre_diabetes():
    return diabetes_prediction()

if __name__ == '__main__':
    app.run(debug=True)
