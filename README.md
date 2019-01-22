Arduino Controller


Used Node-Red for the connection to the arduino




## Issues on Linux. Permissions

* This below allows you permission to use the PORT
  and to be able to upload Sketches in Arduino IDE and 
  use Nod-RED 
ls -l /dev/ttyACM0
sudo chmod a+rw /dev/ttyACMO

#Notes - Further investigation to make permissions permenant
#        because it keeps reseting