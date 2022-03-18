import React from 'react';
import { Alert, View, SafeAreaView, StyleSheet } from 'react-native';
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
// import NavigationBar from './app/components/NavigationBar/NavigationBar';
import HomeScreen from './app/screens/HomeScreen';
import VersusScreen from './app/screens/VersusScreen/VersusScreen';




function App(props) {

  return (
    <View style = {styles.root}>
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      {/* <SearchPage/> */}
      <VersusScreen/>
      {/* <Navigation/> */}

      {/* <HorizontalRestaurantPage/> */}
      {/* <VerticalRestaurantBox/> */}
      {/* <NavigationBar/> */}
      {/* <HomeScreen/> */}

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default App;
