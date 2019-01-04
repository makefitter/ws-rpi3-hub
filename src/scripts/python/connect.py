#connect to a particular device and return connection status
#input: device's MAC address (device's alias) (string), output:connection status (string)
import gatt
import json
import time
import paho.mqtt.client as mqtt
import sys
from pathlib import Path

#data_folder = Path("../../../log")
#file_to_open  = data_folder / "test1.txt"
#fs = open(file_to_open, 'w')
p = (Path(__file__) / ".." / ".." / ".." / "..").resolve()
file_to_open  = Path( p / "log")
final =(file_to_open / (sys.argv[1] + ".txt")) 
fs = open(str(final),'w')

#def connectCloud(data):
    
    #iot_hub = "things.inovatink.com"
    #port = 1883
    #username = "SVGFMQcCxmIJSoMjkeYo"
    #password = ""
    #topic ="v1/devices/me/telemetry"
    #client = mqtt.Client()
    #client.username_pw_set(username,password)
    #client.connect(iot_hub,port)
    #print("Cloud - Connection success")
    #data_test["semasema"]="semir"
    #data_out = json.dumps('{"test":123}')
    #client.publish(topic,data_test,0)
    #time.sleep(3)
#    return True;

def connectWs(MACaddress):

    class AnyDevice(gatt.Device):
        def connect_succeeded(self):
            super().connect_succeeded()
            global status
            status="[" + self.mac_address + "] connected"
            # manager.stop()
        def connect_failed(self, error):
            ga=1
            super().connect_failed(error)
            global status
            status="[" + self.mac_address + "] connection failed: " + str(error)
            print(status)
            manager.stop()
            
        def services_resolved(self):
            super().services_resolved()
            
            device_information_service = next(
            s for s in self.services
            if s.uuid == '49535343-fe7d-4ae5-8fa9-9fafd205e455')
        
            firmware_version_characteristic = next(
            c for c in device_information_service.characteristics
            if c.uuid == '49535343-1e4d-4bd9-ba61-23c647249616')
        
            firmware_version_characteristic.enable_notifications()
            firmware_version_characteristic.read_value()
            
        def characteristic_value_updated(self,characteristic,value):
            
            stringData = value.decode('utf-8').rstrip()
            out = json.loads(stringData) 
            print(stringData)
            #connectCloud(out)
            fs.write(stringData + "\n")
            fs.flush()
            
    print("Connecting...")
    manager = gatt.DeviceManager(adapter_name='hci0')
    device = AnyDevice(manager=manager, mac_address=MACaddress)
    device.connect()
    manager.run()
    
    return status
    
print(connectWs('D8:80:39:F4:26:76'))
