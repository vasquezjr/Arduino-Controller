import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Arduino Controller</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Lights')}
        >
          <Text style={styles.buttonText}> Lights </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Temperature')}
        >
          <Text style={styles.buttonText}> Temperature </Text>
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
  button: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 11,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => {
  const { lights } = state
  return { lights }
};

export default connect(mapStateToProps)(Home);
