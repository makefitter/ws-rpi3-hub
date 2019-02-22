#!/usr/bin/env python
# coding: utf-8

# ### **Reading Data:**

# In[1]:

import sys
from pathlib import path
import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt, mpld3
from mpl_toolkits.mplot3d import  Axes3D #<-- Note the capitalization! 
#fname = "raw_dataset.txt"


#----------------#
p = (Path(__file__) / ".." / ".." / ".." / "..").resolve()
file_to_open  = Path( p / "log")
final =(file_to_open / (sys.argv[1] + ".log")) 
fs = open(str(final),'r')
#--------------------#

sampleRate = 20

with fs as f:
    content = f.readlines()

content = [x.strip() for x in content] 
acc_x, acc_y, acc_z, gyro_x, gyro_y,gyro_z,quat_x,quat_y,quat_z,quat_w = ([] for i in range(10))
for raw in content: 
    acc_x.append(json.loads(raw)["acc_x"])
    acc_y.append(json.loads(raw)["acc_y"])
    acc_z.append(json.loads(raw)["acc_z"])
    gyro_x.append(json.loads(raw)["gyro_x"])
    gyro_y.append(json.loads(raw)["gyro_y"])
    gyro_z.append(json.loads(raw)["gyro_z"])
    quat_x.append(json.loads(raw)["quat_x"])
    quat_y.append(json.loads(raw)["quat_y"])
    quat_z.append(json.loads(raw)["quat_z"])
    quat_w.append(json.loads(raw)["quat_w"])
    
    
sampleCount = len(content)
time = np.arange(0,sampleCount/sampleRate,(1/sampleRate))

acc_ds = pd.DataFrame({"x":acc_x,"y":acc_y,"z":acc_z,"t":time})
gyro_ds = pd.DataFrame({"x":gyro_x,"y":gyro_y,"z":gyro_z,"t":time})
quat_ds = pd.DataFrame({"x":quat_x,"y":quat_y,"z":quat_z,"w":quat_w,"t":time})


# In[2]:



acc_ds.plot(x='t',y=['x','y','z'])
plt.show()
    


#  ### **Plotting RAW Data:** 

# In[3]:


def filtering(data, window):
    temp=data.copy() 
    for column in data:
        if(column != 't'):
            temp[column + 'f'] = data[column].rolling(int(window)).mean()         
    return temp

acc_ds = filtering(acc_ds, (sampleRate/5))
gyro_ds = filtering(gyro_ds,(sampleRate/5))
quat_ds = filtering(quat_ds,(sampleRate/5))

acc_ds[:100].plot(x='t',y=['x','xf','y','yf','z','zf'])
plt.show()


# ### **Filtering:**

# In[4]:


def calcAttr(name,M,overlap,df):
    start = 0
    end = M
    result = pd.DataFrame()
    while  (start + M) < len(df.index):
        selected = df.iloc[start:(start + M)]
        
        result = result.append({
            'selected_'+ name : selected[['xf','yf','zf','t']],
            name + 'x_max':selected['x'].max(),
            name + 'y_max':selected['y'].max(),
            name + 'z_max':selected['z'].max(),
            #------------------------------
            name + 'x_min':selected['x'].min(),
            name + 'y_min':selected['y'].min(),
            name + 'z_min':selected['z'].min(),
            #-------------------------------
            name + 'x_mean':selected['x'].mean(),
            name + 'y_mean':selected['y'].mean(),
            name + 'z_mean':selected['z'].mean(),
            #--------------------------------
            name + 'x_median':selected['x'].median(),
            name + 'y_median':selected['y'].median(),
            name + 'z_median':selected['z'].median(),
             #--------------------------------
            name + 'x_std':selected['x'].std(),
            name + 'y_std':selected['y'].std(),
            name + 'z_std':selected['z'].std(),
             #--------------------------------
            name + 'x_var':selected['x'].var(),
            name + 'y_var':selected['y'].var(),
            name + 'z_var':selected['z'].var(),
             #--------------------------------
            name + 'x_skew':selected['x'].skew(),
            name + 'y_skew':selected['y'].skew(),
            name + 'z_skew':selected['z'].skew(),
             #--------------------------------
            name + 'x_kurtosis':selected['x'].kurtosis(),
            name + 'y_kurtosis':selected['y'].kurtosis(),
            name + 'z_kurtosis':selected['z'].kurtosis(),
             #--------------------------------
            name + 'x_rmse':((np.diff(selected['x']) ** 2).mean() ** .5),
            name + 'y_rmse':((np.diff(selected['y']) ** 2).mean() ** .5),
            name + 'z_rmse':((np.diff(selected['z']) ** 2).mean() ** .5),
             #--------------------------------
            name + 'x_mad':selected['x'].mad(),
            name + 'y_mad':selected['y'].mad(),
            name + 'z_mad':selected['z'].mad(),
             #--------------------------------
            }, ignore_index=True)
        start+=int(M-overlap)
    return result


# In[5]:


selSample = (sampleRate*3)
overlap = int((sampleRate*3)/4)
acc_attr = calcAttr('acc', selSample, overlap, acc_ds)
gyro_attr = calcAttr('gyro', selSample, overlap,gyro_ds)
quat_attr = calcAttr('quat',selSample,overlap,quat_ds) 
acc_attr.loc[:(sampleRate*3),['accx_std','accy_std','accz_std','accx_var','accy_var','accz_var']].plot()
plt.show()


# In[8]:



ax = acc_attr.loc[:(sampleRate*3),['accx_std','accy_std','accz_std','accx_var','accy_var','accz_var']].plot()
fig = ax.get_figure()
_str = mpld3.fig_to_html(fig)


# In[9]:

toWrite = open('graph.html','w+')
toWrite.write(_str)

# In[ ]:




