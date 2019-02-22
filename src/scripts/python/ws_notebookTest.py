#!/usr/bin/env python
# coding: utf-8

# ### **Reading Data:**

# In[1]:
from pathlib import Path
import sys
import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt, mpld3
from mpl_toolkits.mplot3d import  Axes3D #<-- Note the capitalization! 

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


ax = acc_ds.loc[:(sampleRate*3),['x']].plot()
fig = ax.get_figure()
_str = mpld3.fig_to_html(fig)
toWrite = open('graph.html',"w+")
toWrite.write(_str)

