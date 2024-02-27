import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings 

from sklearn.model_selection import train_test_split

dataframe=pd.read_csv("heart.csv")
dataframe.head(10)
dataframe.info()

dataframe.isna().sum()
plt.figure(figsize=(15,10))
sns.heatmap(dataframe.corr(),linewidth=.01,annot=True,cmap="winter")
plt.savefig("CorrelationHeartFigure")
# plt.show()

dataframe.hist(figsize=(12,12))
plt.savefig("figureplot")
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
print("classification_report",classification_report(y_test, prediction1))



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
print('Testing Accuracy for Decision Tree:',(TP+TN)/(TP+TN+FN+FP))

print('Testing Precision for Decision Tree:',(TP/(TP+FP)))


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
print(round(accuracy_score(prediction3,y_test)*100,2))
print('Testing Accuracy for Random Forest:',(TP+TN)/(TP+TN+FN+FP))
print('Testing Precision for Random Forest:',(TP/(TP+FP)))
print(classification_report(y_test, prediction3))

#------------------------------------------------------------------------------------------------------------------
#  Neural network

from sklearn.neural_network import MLPClassifier
model_nn = MLPClassifier(random_state=42, max_iter=500)
model_nn=rfc.fit(X_train, y_train)

prediction5 = model_nn.predict(X_test)

accuracy_nn = accuracy_score(y_test, prediction5)
print(f'Neural Network Accuracy: {accuracy_nn:.2f}')
print('Classification Report:\n', classification_report(y_test, prediction5))

# Checking Patient Heart problem 

# age,sex,cp,trtbps,chol,fbs,restecg,thalachh,exng,oldpeak,slp,caa,thall,output
input=(93,2,0,332,193,1.2,1,6.2,4.8,7.1,3.4,1.4,2)
input_as_numpy=np.asarray(input)
input_reshaped=input_as_numpy.reshape(1,-1)
pre1=tree_model.predict(input_reshaped)
if(pre1==1): 
  print("The patient seems to be have heart disease:(")
else:
  print("The patient seems to be Normal:)")