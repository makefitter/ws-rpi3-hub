#print("Disconnected!!!")
#disconnect from ws and return connection status
#input: device's MAC address (device's alias) (string), output:connection status (string)

def disconnectWs(MACaddress):

    import gatt
    
    class AnyDevice(gatt.Device):
        def disconnect_succeeded(self):
            super().disconnect_succeeded()
            global status
            status="[" + MACaddress + "] disconnected"
            manager.stop()
            

    print("Disconnecting...")

    manager = gatt.DeviceManager(adapter_name='hci0')

    device = AnyDevice(manager=manager, mac_address=MACaddress)
    device.connect()
    device.disconnect()
    manager.run()
    return status

print(disconnectWs('D8:80:39:F4:26:76'))
