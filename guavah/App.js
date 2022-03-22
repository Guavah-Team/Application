import React from 'react';
import { Alert, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import colors from './app/config/colors/colors';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import NewPasswordScreen from './app/screens/NewPasswordScreen';
import Navigation from './app/navigation';
import SearchPage from './app/screens/SearchPage';
import HorizontalRestaurantPage from './app/components/HorizontalRestaurantBox/HorizontalRestaurantPage';
import VerticalRestaurantBox from './app/components/VerticalRestaurantBox/VerticalRestaurantBox';
import HomeScreen from './app/screens/HomeScreen';

import * as Location from 'expo-location';





function App(props) {
  const temp = 2374;


  return (
    <View style = {styles.root}>
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      {/* <Navigation/> */}

      {/* <SearchPage/> */}
      <Navigation/>

      {/* <HorizontalRestaurantPage name = "MarieCallendar’s Restaurant & Bakery"/> */}
      {/* <VerticalRestaurantBox name = "Olive Garden" distance = "10000" rating = {1}/> */}
      {/* <NavigationBar/> */}
      {/* <HomeScreen/> */}

      {/* <View style = {styles.polygon}></View> */}


      
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
