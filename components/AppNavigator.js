import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Lights from './Lights';
import Temperature from './Temperature';

const AppNavigator = createStackNavigator({
   Home: { screen: Home },
   Lights: { screen: Lights},
   Temperature: { screen: Temperature}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
