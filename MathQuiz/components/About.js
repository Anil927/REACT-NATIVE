import React from "react"
import { View, Text, } from "react-native"
import { Linking } from 'react-native';


export default function About() {
    return (
      <View style={{ margin:10 }}>
        <Text>This is a mathematics quiz app where you can give tests and sharp your mind</Text>
        <Text> </Text>
        <Text>Source code is available at github   
          <Text style={{ color: "blue" }}
            onPress={() => Linking.openURL('https://github.com/Anil927/REACT-NATIVE/')}>
               : click here
          </Text>
        </Text>
        <Text>Version: 1.0.0</Text>
        <Text>Developer: Anila Kumar Patra</Text>
      </View>
    );
}