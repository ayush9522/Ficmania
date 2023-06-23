import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Registration/Login';
import Signup from './Screens/Registration/Signup';
import ChartScreen from './Screens/Chart/ChartScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ChartScreen" component={ChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


