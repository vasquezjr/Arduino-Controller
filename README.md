# Hardware Controller


This app is built on React Native to communicated with Node-Red that is being served on a Raspberry Pi 3

#### Hardware Used
* Raspberry Pi 3
* Arduino

#### Software Used
* Node-Red
* Raspbian OS  for Raspberry Pi 3

#### Issues on Linux. Permissions

* To allow permission to use the USB PORT and to be able to upload Sketches in Arduino IDE and use Nod-RED 
ls -l /dev/ttyACM0
sudo chmod a+rw /dev/ttyACMO
