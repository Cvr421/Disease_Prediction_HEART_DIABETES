import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns



dataframe=pd.read_csv("diabetes.csv")
dataframe.head(10)
dataframe.info()