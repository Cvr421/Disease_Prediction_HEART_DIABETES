import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings 
from flask import Flask, request, jsonify
from sklearn.model_selection import train_test_split

dataframe=pd.read_csv("heart.csv")
# dataframe.head(10)
# dataframe.info()

dataframe.isna().sum()
plt.figure(figsize=(15,10))
# sns.heatmap(dataframe.corr(),linewidth=.01,annot=True,cmap="winter")
# plt.savefig("CorrelationHeartFigure")
# plt.show()

dataframe.hist(figsize=(12,12))
# plt.savefig("figureplot")
# plt.show()

# Spliting the data into training set and test set
Heart_X= dataframe.iloc[:,:-1].values
Heart_Y= dataframe.iloc[:,-1].values

X_train, X_test,y_train, y_test=train_test_split(Heart_X,Heart_Y,test_size=0.25,random_state=40)

# ---------------------------------------------------------------------------------------------------------------
# Logistic Regression
from sklearn.model_selection import cross_val_score, GridSearchCV
from sklearn.linear_model import LogisticRegression

lr=LogisticRegression(C=1.0, class_weight='balanced', dual=False,
                   fit_intercept=True, intercept_scaling=1, l1_ratio=None,
                   max_iter=100, multi_class='auto', n_jobs=None, penalty='l2',
                   random_state=1234, solver='lbfgs', tol=0.0001, verbose=0,
                   warm_start=False)
model1=lr.fit(X_train,y_train)
prediction1=model1.predict(X_test)
from sklearn.metrics import confusion_matrix
cm=confusion_matrix(y_test,prediction1)
TP=cm[0][0]
TN=cm[1][1]
FN=cm[1][0]
FP=cm[0][1]
# print('Testing Accuracy for Logistic Regression:',(TP+TN)/(TP+TN+FN+FP))
# print('Testing Precision for Logistic Regression:',(TP/(TP+FP)))
from sklearn.metrics import classification_report
# print("classification_report",classification_report(y_test, prediction1))



# ------------------------------------------------------------------------------------------------------
# Decision Tree
from sklearn.model_selection import RandomizedSearchCV
from sklearn.tree import DecisionTreeClassifier

tree_model = DecisionTreeClassifier(max_depth=5,criterion='entropy')
cv_scores = cross_val_score(tree_model, Heart_X, Heart_Y, cv=10, scoring='accuracy')
m=tree_model.fit(Heart_X,Heart_Y )
prediction=m.predict(X_test)
cm= confusion_matrix(y_test,prediction)
print(classification_report(y_test, prediction))
TP=cm[0][0]
TN=cm[1][1]
FN=cm[1][0]
FP=cm[0][1]
# print('Testing Accuracy for Decision Tree:',(TP+TN)/(TP+TN+FN+FP))

# print('Testing Precision for Decision Tree:',(TP/(TP+FP)))


# -------------------------------------------------------------------------------------------------------------------------

# Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

rfc=RandomForestClassifier(n_estimators=500,criterion='entropy',max_depth=8,min_samples_split=5)
model3 = rfc.fit(X_train, y_train)
prediction3 = model3.predict(X_test)
cm3=confusion_matrix(y_test, prediction3)
sns.heatmap(cm3, annot=True,cmap='winter',linewidths=0.3, linecolor='black',annot_kws={"size": 20})
TP=cm3[0][0]
TN=cm3[1][1]
FN=cm3[1][0]
FP=cm3[0][1]
# print(round(accuracy_score(prediction3,y_test)*100,2))
# print('Testing Accuracy for Random Forest:',(TP+TN)/(TP+TN+FN+FP))
# print('Testing Precision for Random Forest:',(TP/(TP+FP)))
# print(classification_report(y_test, prediction3))

#------------------------------------------------------------------------------------------------------------------
#  Neural network

from sklearn.neural_network import MLPClassifier
model_nn = MLPClassifier(random_state=42, max_iter=500)
model_nn=rfc.fit(X_train, y_train)

prediction5 = model_nn.predict(X_test)

accuracy_nn = accuracy_score(y_test, prediction5)
# print(f'Neural Network Accuracy: {accuracy_nn:.2f}')
# print('Classification Report:\n', classification_report(y_test, prediction5))

# Support Vector Machines(SVM)

from sklearn.svm import SVC
svm=SVC(C=12,kernel='linear')
model4=svm.fit(X_train,y_train)
prediction4=model4.predict(X_test)
cm4= confusion_matrix(y_test,prediction4)
sns.heatmap(cm4, annot=True,cmap='winter',linewidths=0.3, linecolor='black',annot_kws={"size": 20})
TP=cm4[0][0]
TN=cm4[1][1]
FN=cm4[1][0]
FP=cm4[0][1]
  
# print('Testing Accuracy for SVM:',(TP+TN)/(TP+TN+FN+FP))
# print('Testing Precision for Random Forest:',(TP/(TP+FP)))
# print(classification_report(y_test, prediction4))

# Checking Patient Heart problem using Decision tree classifier

def submit_form():
  importance_data_dict = {}
  advice_text=""
  
  if request.is_json:
    form_data = request.get_json()  # Get JSON data from the request
    # user_input = form_data['user_input']  # Extract user input from form data
    
    user_input_list = [float(value) for value in form_data.values()]
#   --------------------------------------------------------------------------  
    # Now predicting the Heart Disease on the bases of usr input
    input_data = np.array(user_input_list).reshape(1, -1)
    pre1 = tree_model.predict(input_data) #Here tree_model is Dicesion tree classifier algo
    if pre1 == 1:
         response_text="The patient seems to be have heart disease...Based on the analysis of your input data, the following features are highly contributing to the risk of Heart Failiar"
         advice_text="  We recommend monitoring and controlling these factors to manage your risk of Heart Disease"
         feature_importances = tree_model.feature_importances_
         importance_df = pd.DataFrame({'Feature': dataframe.columns[:-1], 'Importance': feature_importances})
         importance_df = importance_df.sort_values(by='Importance', ascending=False)
         importance_data_dict = importance_df.to_dict()
    # 5. Provide Recommendations
        
         
    else:
         response_text="The patient seems to be Normal..."
    
    # For now, just return the received data
    return jsonify({
                    # "received_data": user_input,
                    #  "pridicted_result": response_text
                    "pridicted_result" :response_text,
                    "importance_data": importance_data_dict,
                    "advice_text":advice_text
                 })
  else:
      return jsonify({'error':'invalid request format, expected JSON'})



# Taking user data through terminal

# # age,sex,cp,trtbps,chol,fbs,restecg,thalachh,exng,oldpeak,slp,caa,thall,output
# # Taking usr input of Heart attack causing Parameters
# user_input = []
# for i in range(len(dataframe.columns) - 1):  # Exclude the last column (Outcome)
#     column_name = dataframe.columns[i]  # Get the name of the column
#     value = float(input("Enter no of {}: ".format(column_name)))
#     user_input.append(value)

# # Now predicting the Heart Disease on the bases of usr input
# input_data = np.array(user_input).reshape(1, -1)
# pre1 = tree_model.predict(input_data)


  
# feature_importances = tree_model.feature_importances_
# importance_df = pd.DataFrame({'Feature': dataframe.columns[:-1], 'Importance': feature_importances})
# importance_df = importance_df.sort_values(by='Importance', ascending=False)
# print("Most Causing factor for Heart Attack")
# print(importance_df)



# if pre1 == 1:
#     feature_contributions = tree_model.predict_proba(input_data)[0]  # Get the probabilities for each class
#     # The first element of feature_contributions corresponds to the probability of class 0 (no diabetes)
#     # The second element corresponds to the probability of class 1 (diabetes)
    
#     # We can consider the difference between the probabilities as the contribution of each feature to the predicted risk of diabetes
#     # The higher the difference, the more influential the feature is in predicting diabetes
#     feature_contribution_diff = feature_contributions[1] - feature_contributions[0]
#     print("feature contribution diff",feature_contribution_diff)
#     # 4. Identify Highly Contributing Features
#     # We can consider features with higher contribution differences as highly contributing features
#     highly_contributing_features = []
#     for i, feature_name in enumerate(dataframe.columns[:-1]):  # Exclude the last column (Outcome)
#         if feature_contribution_diff >= 0.1:  # Adjust the threshold as needed
#             highly_contributing_features.append(feature_name)

#     # 5. Provide Recommendations
#     if len(highly_contributing_features) > 0:
#         print("Based on the analysis of your input data, the following features are highly contributing to the risk of Heart Failiar:")
#         for feature_name in highly_contributing_features:
#             print("- {}".format(feature_name))
#         print("We recommend monitoring and controlling these factors to manage your risk of Heart Disease.")
#     else:
#         print("No specific features were identified as highly contributing to the risk of Heart Disease based on your input data.")
# else:
#     print("Based on the analysis of your input data, it seems that you have a low risk of Heart Disease.")