import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Subtraction" component={Subtraction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return (
    <ScrollView style={[styles.container,]}>
      <StatusBar backgroundColor="#112545" barStyle={'light-content'} />
      <LinearGradient
        colors={['#061329', '#052861']}
        style={styles.container}
        start={{ x: 0.9, y: 0.1 }}
        end={{ x: 0.7, y: 0.7 }}>
        <View style={[styles.container,{marginBottom:23}]}>
          {/* <TouchableHighlight
            style={[styles.button, { backgroundColor: "#246EE9" }]}
            onPress={() => navigation.navigate("Addition")}
            activeOpacity={0.8}
            underlayColor="#5b86e5">
            <Text style={styles.btnText}>Addition</Text>
          </TouchableHighlight> */}

          <TouchableHighlight
            onPress={() => navigation.navigate('Addition')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Addition</Text>
            </LinearGradient>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate('Subtraction')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Subtraction</Text>
            </LinearGradient>
          </TouchableHighlight>



          <TouchableHighlight
            onPress={() => navigation.navigate('Multiplication')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Multiplication</Text>
            </LinearGradient>
          </TouchableHighlight>



          <TouchableHighlight
            onPress={() => navigation.navigate('Division')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Division</Text>
            </LinearGradient>
          </TouchableHighlight>



          <TouchableHighlight
            onPress={() => navigation.navigate('random')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Random</Text>
            </LinearGradient>
          </TouchableHighlight>


          <TouchableHighlight
            onPress={() => navigation.navigate('Prime')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Prime</Text>
            </LinearGradient>
          </TouchableHighlight>


          <TouchableHighlight
            onPress={() => navigation.navigate('Numbers')}
            activeOpacity={0.8}
            underlayColor="#5b86e5"
            style={styles.forTouch}>
            <LinearGradient
              colors={['#03A9F4', '#246EE9']}
              start={{ x: 1.2, y: 0.4 }}
              end={{ x: 0.2, y: 0.2 }}
              style={styles.button}>
              <Text style={styles.btnText}>Numbers</Text>
            </LinearGradient>
          </TouchableHighlight>


        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const Addition = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5b86e5', '#36d1dc']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text>Addition</Text>
      </LinearGradient>
    </View>
  );
};

const Subtraction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5b86e5', '#36d1dc']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text>Subtraction</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 29,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 17,
    shadowOffset: { width: 14, height: 15 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 6,
    elevation: 5,
  },
  btnText: {
    fontFamily: 'Mitr-Medium',
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
  forTouch: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 17,
  }
});
