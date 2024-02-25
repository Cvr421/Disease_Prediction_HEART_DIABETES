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

# -----------------------------------
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
cm
sns.heatmap(cm, annot=True,cmap='winter',linewidths=0.3, linecolor='black',annot_kws={"size": 20})
TP=cm[0][0]
TN=cm[1][1]
FN=cm[1][0]
FP=cm[0][1]
print('Testing Accuracy for Logistic Regression:',(TP+TN)/(TP+TN+FN+FP))
print('Testing Precision for Logistic Regression:',(TP/(TP+FP)))