import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings 



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


