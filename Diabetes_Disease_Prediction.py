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

