# ws-rpi3-hub

## Python implementation of BLE communication with sensor

Install necessary applications:

```
sudo apt-get update
sudo apt-get install bluetooth bluez blueman (in this case version 5.43)
sudo reboot
```

For debugging of the connection between the RPI and armband, you may try to run the following commands in the terminal:

```
sudo bluetoothctl 
agent on
defaul-agent
power on
discoverable on
scan on (after a while, it should show the WS-INO-XXXX)
pair XX:XX:XX:XX:XX:XX
trust XX:XX:XX:XX:XX:XX
connect XX:XX:XX:XX:XX:XX
```

With the first pairing, it will report a lot of information about the device services, characteristics and descriptors. 
Also we can get this information with command: 
```
list-attributes XX:XX:XX:XX:XX:XX.
```

After that, you need to find Service with UUID: 49535343-fe7d-4ae5-8fa9-9fafd205e455. 
There will be Characteristic with UUID:  49535343-1e4d-4bd9-ba61-23c647249616, which contains flags: indicate, notify, write, write no response.

You can select the attribute with command:

```
select-attribute /org/bluez/hci0/dev_XX_XX_XX_XX_XX_XX/service0050/char0051
attribute-info (You get attribute information)
notify on
```

And then you will get the data...