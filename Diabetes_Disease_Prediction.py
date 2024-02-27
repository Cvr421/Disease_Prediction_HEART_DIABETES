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
print("Accuracy_RFC",f1_score)



# -----------------------------------------------------------------------------------------
# Not using neural network algo because it's accuracy is lower than the RFC in predicting diabetes
x_train,x_test,y_train,y_test=train_test_split(Diabetes_X,Diabetes_Y,test_size=0.2,random_state=42)
from sklearn.neural_network import MLPClassifier
neuralNet = MLPClassifier()
neuralNet=rfc.fit(x_train, y_train)
prediction5 = neuralNet.predict(x_test)
accuracy_nn = accuracy_score(y_test, prediction5)
print("Accuracy NeuralNET",accuracy_nn)
# ---------------------------------------------------------------------------------------------------

# Takig usr input of Diabetes causing Parameters
user_input = []
for i in range(len(dataframe.columns) - 1):  # Exclude the last column (Outcome)
    column_name = dataframe.columns[i]  # Get the name of the column
    value = float(input("Enter no of {}: ".format(column_name)))
    user_input.append(value)

# Now predicting the Diabetes on the bases of usr input
input_data = np.array(user_input).reshape(1, -1)
prediction = randomFC.predict(input_data)

# if prediction == 1:
#     print("The model predicts that the user may have diabetes.")
# else:
#     print("The model predicts that the user may not have diabetes.")
    
# Getting all the major parameter that are highly reponsible for causing the diabetes 
feature_importances = randomFC.feature_importances_
importance_df = pd.DataFrame({'Feature': dataframe.columns[:-1], 'Importance': feature_importances})
importance_df = importance_df.sort_values(by='Importance', ascending=False)
print(importance_df)



if prediction == 1:
    feature_contributions = randomFC.predict_proba(input_data)[0]  # Get the probabilities for each class
    # The first element of feature_contributions corresponds to the probability of class 0 (no diabetes)
    # The second element corresponds to the probability of class 1 (diabetes)
    
    # We can consider the difference between the probabilities as the contribution of each feature to the predicted risk of diabetes
    # The higher the difference, the more influential the feature is in predicting diabetes
    feature_contribution_diff = feature_contributions[1] - feature_contributions[0]

    # 4. Identify Highly Contributing Features
    # We can consider features with higher contribution differences as highly contributing features
    highly_contributing_features = []
    for i, feature_name in enumerate(dataframe.columns[:-1]):  # Exclude the last column (Outcome)
        if feature_contribution_diff > 0.127385:  # Adjust the threshold as needed
            highly_contributing_features.append(feature_name)

    # 5. Provide Recommendations
    if len(highly_contributing_features) > 0:
        print("Based on the analysis of your input data, the following features are highly contributing to the risk of diabetes:")
        for feature_name in highly_contributing_features:
            print("- {}".format(feature_name))
        print("We recommend monitoring and controlling these factors to manage your risk of diabetes.")
    else:
        print("No specific features were identified as highly contributing to the risk of diabetes based on your input data.")
else:
    print("Based on the analysis of your input data, it seems that you have a low risk of diabetes.")