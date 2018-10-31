import time
import random
import json
# starttime=time.time()

data = {
  "acc_x":round(random.uniform(0,2),3),
  "acc_y":round(random.uniform(0,2),3),
  "acc_z":round(random.uniform(0,2),3),
  "gyro_x":round(random.uniform(0,2),3),
  "gyro_y":round(random.uniform(0,2),3),
  "gyro_z":round(random.uniform(0,2),3),
  "quat_x":round(random.uniform(0,2),3),
  "quat_y":round(random.uniform(0,2),3),
  "quat_z":round(random.uniform(0,2),3),
  "quat_w":round(random.uniform(0,2),3),
}
# _s = '"acc_x":-0.38,"acc_y":0.18,"acc_z":0.94,"gyro_x":0.67,"gyro_y":0.18,"gyro_z":-1.04,"quat_w":-0.1547,"quat_x":-0.2048,"quat_y":0.0580,"quat_z":0.9648}'


while True:

  data['acc_x'] = round(random.uniform(0,2),3)
  data['acc_y'] = round(random.uniform(0,2),3)
  data['acc_z'] = round(random.uniform(0,2),3)
  data['gyro_x'] = round(random.uniform(0,2),3)
  data['gyro_y'] = round(random.uniform(0,2),3)
  data['gyro_z'] = round(random.uniform(0,2),3)
  data['quat_x'] = round(random.uniform(0,2),3)
  data['quat_y'] = round(random.uniform(0,2),3)
  data['quat_z'] = round(random.uniform(0,2),3)
  data['quat_w'] = round(random.uniform(0,2),3)


  print (json.dumps(data))
  time.sleep(1)
  