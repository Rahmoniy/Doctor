// App.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import MainTabNavigator from './pages/Mein/MainTabNavigator';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import DrInformation from './components/Dr. information/DrInformation';
import store from './redux/store';
import HospitalFilter from './components/HospitalFilter/HospitalFilter';
import HospitalInformation from "./components/HospitalInformation/HospitalInformation";

const Stack = createNativeStackNavigator();

// console.log("==>>>", store);

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="DrInformation" component={DrInformation} />
            <Stack.Screen name="HospitalFilter" component={HospitalFilter} />
            <Stack.Screen name="HospitalInformation" component={HospitalInformation} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider >
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
