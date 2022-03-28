import React from 'react';
import { Alert, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import colors from './app/config/colors/colors';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import NewPasswordScreen from './app/screens/NewPasswordScreen';
import RestaurantScreen from './app/screens/RestaurantScreen/RestaurantScreen';
import Navigation from './app/navigation';
import SearchPage from './app/screens/SearchPage';
import HorizontalRestaurantPage from './app/components/HorizontalRestaurantBox/HorizontalRestaurantPage';
import VerticalRestaurantBox from './app/components/VerticalRestaurantBox/VerticalRestaurantBox';
import HomeScreen from './app/screens/HomeScreen';
import ReviewScreen from './app/screens/ReviewScreen';

import * as Location from 'expo-location';





function App(props) {
  const temp = 2374;


  return (
    <SafeAreaView style = {styles.root}>
      {/*<RestaurantScreen/>/*/}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
<<<<<<< HEAD
      <ReviewScreen/>
      {/*<Navigation/>*/}
      {/* <SearchPage/> */}
=======

>>>>>>> 578ef544043a120af91c0207ec66c84f226080d0
      {/* <Navigation/> */}

      {/* <SearchPage/> */}
      <Navigation/>

      {/* <HorizontalRestaurantPage name = "MarieCallendar’s Restaurant & Bakery"/> */}
      {/* <VerticalRestaurantBox name = "Toast" distance = "10000"/> */}
      {/* <NavigationBar/> */}
      {/* <HomeScreen/> */}


      
    </SafeAreaView>
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
