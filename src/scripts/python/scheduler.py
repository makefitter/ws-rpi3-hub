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
i = 0
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
  if i > 5 :
    break
  i+=1
  print (json.dumps(data))
  time.sleep(1)
  