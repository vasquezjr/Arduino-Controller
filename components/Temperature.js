import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon } from 'react-native';
import { connect } from 'react-redux';
import { toggleLight } from '../ducks/LightReducer';

import axios from 'axios'

class Temperature extends React.Component {

  state = {
    temperature: 0,
    humidity: 0,
  }


  getTemperature = async () => {
    const response = await axios.get('http://192.168.1.15:1880/temperature')
    //console.error(response.data)
    const celsius = parseInt(response.data.temperature, 10);
    const humidity = parseInt(response.data.humidity, 10);
    const fahrenheit = celsius * 9 / 5 + 32;
    this.setState({temperature: fahrenheit, humidity})
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.headerText}>
          {this.state.temperature} °F 
          </Text>
          <Text style={styles.headerSmallText}>
          Humidity: {this.state.humidity} 
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            key={ this.state.temperature }
            style={styles.tempButton}
            onPress={() => this.getTemperature()}
          >
            <Text style={styles.buttonText}>
              Refresh
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}> Back Home </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227493',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    marginTop: 50,
    marginRight: 50,
    height: 200,
    alignItems: 'flex-end',
  },
  bottom: {
    flexGrow: 1,
    marginTop: 300,
    width: 400,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 65,
    alignItems: 'flex-end',
  },
  headerSmallText: {
    color: 'white',
    fontSize: 20,
    alignItems: 'flex-end',
    paddingBottom: 300,
  },
  buttonHome: {
    width: '50%',
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 11,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  tempButton: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#494E6B',
    padding: 11,
    marginBottom: 20,
  },
});





const mapStateToProps = (state) => {
  return {
    lights: state.lights
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLight: (color, index) => dispatch(toggleLight(color, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);
