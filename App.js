import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Home from './Home';
import Page1 from './Page1';


const Images = createStackNavigator({

  Home: { screen: Home },
  Page1: { screen: Page1 },
  
});

const App = createAppContainer(Images);


export default App; 