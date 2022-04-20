import React, {useState, useEffect} from 'react';
import { Alert, View, Text, FlatList, SafeAreaView, StyleSheet, TextInput } from 'react-native';
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
import VersusScreen from './app/screens/VersusScreen/VersusScreen';

import * as Location from 'expo-location';
import UserSettingsScreen from './app/screens/UserSettingsScreen';
import CustomSearch from './app/components/CustomSearch';


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
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();

  }, []);



  return (
    <View style = {styles.root}>
      {/*<RestaurantScreen/>/*/}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      {/* <SearchPage/> */}
      {/* <VersusScreen/> */}
      {/* <Navigation/> */}
      {/* <Navigation/> */}

      {/* <SearchPage/> */}

      <Navigation latitude={latitude} longitude={longitude}/>


      {/* <HorizontalRestaurantPage name = "Fosters Freeze" distance={10000} price={2}/> */}
      {/* <VerticalRestaurantBox name = "Olive Garden" distance = "10000" rating = {1} price={2}/> */}
      {/* <NavigationBar/> */}
      {/* <HomeScreen/> */}
      {/* <Text>{text}</Text> */}
      {/* <View style = {styles.polygon}></View> */}


      {/*<Navigation/>*/}
      {/* <SearchPage/> */}
      {/* <Navigation/> */}
      {/* <UserSettingsScreen/> */}
      {/* <HorizontalRestaurantPage name = "MarieCallendar’s Restaurant & Bakery"/> */}

      {/* <Navigation/> */}
{/* 
      <CustomSearch
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      /> */}

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
