import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "../MathQuiz/components/About"
import HomeScreen from "./components/HomeScreen"



const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor:"#081c3b",
          shadowColor:"black",
          shadowRadius:10,
        },
        headerTintColor:"white",
        headerTitleStyle:{
          fontFamily:"Mitr-Medium",
          marginLeft:-13
        },
      }}>
        <Drawer.Screen name="Math"  component={HomeScreen} />

        <Drawer.Screen name="About"  component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


