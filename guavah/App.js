import React from 'react';
import { Alert, View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
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

import * as Location from 'expo-location';
import UserSettingsScreen from './app/screens/UserSettingsScreen';




const data = [
  {
    name: "MarieCallendar’s Restaurant & Bakery",
    distance: 13,
  },
  {
    name: "MarieC",
    distance: 13,
  }
]

function App(props) {
  const temp = 2374;


  return (
    <View style = {styles.root}>
      {/*<RestaurantScreen/>/*/}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      {/*<Navigation/>*/}
      {/* <SearchPage/> */}
      {/* <Navigation/> */}
      {/* <UserSettingsScreen/> */}
      {/* <HorizontalRestaurantPage name = "MarieCallendar’s Restaurant & Bakery"/> */}

      <Navigation/>
      {/* <SearchPage/> */}
      {/* <Navigation/> */}
      {/* <RestaurantScreen/> */}

      {/* <HorizontalRestaurantPage restaurant={data}/> */}
      {/* <FlatList
          data={data}
          renderItem={({ item }) => <HorizontalRestaurantPage restaurant={item} />}
        /> */}
      {/* <FlatList
          data={data}
          renderItem={({ item }) => <VerticalRestaurantBox restaurant={item} />}
        /> */}
        
      {/* <VerticalRestaurantBox name = "Toast" distance = "10000"/> */}
      {/* <NavigationBar/> */}
      {/* <HomeScreen/> */}
      
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
