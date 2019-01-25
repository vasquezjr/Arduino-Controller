# Hardware Controller


This app is built on React Native to communicated with Node-Red that is being served on a Raspberry Pi 3




### Issues on Linux. Permissions

* This below allows you permission to use the PORT
  and to be able to upload Sketches in Arduino IDE and 
  use Nod-RED 
ls -l /dev/ttyACM0
sudo chmod a+rw /dev/ttyACMO

#Notes - Further investigation to make permissions permenant
#        because it keeps reseting
