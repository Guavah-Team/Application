import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import colors from './app/config/colors/colors';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './app/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import NewPasswordScreen from './app/screens/NewPasswordScreen';
import Navigation from './app/navigation';
import HorizontalRestaurantPage from './app/components/HorizontalRestaurantBox/HorizontalRestaurantPage';
import VerticalRestaurantBox from './app/components/VerticalRestaurantBox/VerticalRestaurantBox';
import NavigationBar from './app/components/NavigationBar/NavigationBar';



function App(props) {

  return (
    <SafeAreaView style = {styles.root}>
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      <Navigation/>

      {/* <HorizontalRestaurantPage/> */}
      {/* <VerticalRestaurantBox/> */}
      {/* <NavigationBar/> */}

      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    // backgroundColor: 'blue',
    flex: 1,
  },
});

export default App;
