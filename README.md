# ws-rpi3-hub
Hub implementation using rpi3


For debugging of the connection between the raspberry and armband, you may try to run the following commands in the terminal:

sudo apt-get install bluetooth bluez blueman (in this case version 5.43)

sudo reboot 

(Before trying to connect to the armband, make sure you are not already connected to mobile phone.)

sudo bluetoothctl 

agent on

defaul-agent

power on

discoverable on

scan on (after a while, it should show the WS-INO-1DEA)

pair D8:80:39:F4:1D:EA

trust  D8:80:39:F4:1D:EA

connect  D8:80:39:F4:1D:EA

With the first pairing, it will report a lot of information about the device services, characteristics and descriptors. (Also we can get this information with command: list-attributes D8:80:39:F4:1D:EA )
After that, you need to find Service with UUID: 49535343-fe7d-4ae5-8fa9-9fafd205e455. There will be Characteristic with UUID:  49535343-1e4d-4bd9-ba61-23c647249616, which contains flags: indicate, notify, write, write no response.
It has been listed as:

Primary Service
    /org/bluez/hci0/dev_D8_80_39_F4_1D_EA/service0050
    49535343-fe7d-4ae5-8fa9-9fafd205e455
    Vendor specific

Characteristic
    /org/bluez/hci0/dev_D8_80_39_F4_1D_EA/service0050/char0051
    49535343-1e4d-4bd9-ba61-23c647249616
    Vendor specific

You can select the attribute with command:
select-attribute /org/bluez/hci0/dev_D8_80_39_F4_1D_EA/service0050/char0051

attribute-info (You get attribute information)

notify on

And then you will get the data.
