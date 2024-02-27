import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score,confusion_matrix

dataframe=pd.read_csv("diabetes.csv")
dataframe.head(10)
dataframe.info()
dataframe.describe()
dataframe.isnull().sum()

# Spliting the data 
Diabetes_X= dataframe.iloc[:,:-1].values
Diabetes_Y= dataframe.iloc[:,-1].values


x_train,x_test,y_train,y_test=train_test_split(Diabetes_X,Diabetes_Y,test_size=0.2,random_state=23)
from sklearn.ensemble import RandomForestClassifier
rfc=RandomForestClassifier(n_estimators=500,criterion='entropy',max_depth=8,min_samples_split=5)
randomFC=RandomForestClassifier()
randomFC=rfc.fit(x_train,y_train)
f1_pred=randomFC.predict(x_test) 
print("Predicted",f1_pred)
f1_score=accuracy_score(y_test,f1_pred)*100
print("Accuracy_diabetes",f1_score)



