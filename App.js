import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
// import ProductScreen from './components/ProductScreen';
import ServicesScreen from './components/ServicesScreen';
import PerfumeScreen from './ProductScreenList/PerfumeScreen';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator(); 

const ExploreStack = ()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Product' component={PerfumeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App (){
  return(
   <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name='About' component={AboutScreen}></Drawer.Screen>
      <Drawer.Screen name='Product' component={ExploreStack}></Drawer.Screen>
      <Drawer.Screen name='Services' component={ServicesScreen}></Drawer.Screen>
    </Drawer.Navigator>
   </NavigationContainer>
  )
}

export default App;
