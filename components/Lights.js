import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleLight } from '../ducks/LightReducer';

class Lights extends React.Component {

  

  render() {
    //const colorObject = this.props.lights.color;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Light Controller {this.props.lights.current}
        </Text>
         {
          this.props.lights.color.map((color, index) => {
            const keyColor = Object.keys(color)[0];
            const button = 'lightButton' + color[keyColor];
            return (
              <TouchableOpacity
                key={ keyColor }
                style={styles[button]}
                onPress={() => this.props.toggleLight(keyColor, index)}
              >
                <Text style={styles.lightButtonText}>
                  {keyColor + ' Light is ' + color[keyColor]}
                </Text>
              </TouchableOpacity>
            )
          })
        }
        <TouchableOpacity
          style={styles.buttonHome}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.buttonHomeText}> Back Home </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227493',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    paddingBottom: 50,
  },
  buttonHome: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 11,
  },
  buttonHomeText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  lightButtonOFF: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#494E6B',
    padding: 11,
    marginBottom: 20,
  },
  lightButtonON: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#EAB126',
    padding: 11,
    marginBottom: 20,
  },
  lightButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(Lights);
