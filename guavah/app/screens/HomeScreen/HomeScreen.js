import React, { useEffect, useState } from "react";
import {View, Text, FlatList, StyleSheet, ScrollView, ImageBackground, ActivityIndicator, RefreshControlBase, Alert, RefreshControl, LayoutAnimation} from "react-native";
import HorizontalRestaurantPage from "../../components/HorizontalRestaurantBox/HorizontalRestaurantPage";
import VerticalRestaurantBox from "../../components/VerticalRestaurantBox";
import Amplify, { Auth } from "aws-amplify";
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { getDetailedRestaurantData, getUserData } from "../../services/requests";
import colors from "../../config/colors/colors";
import CustomButton from "../../components/CustomButton";
import {useFonts} from 'expo-font';

import * as Location from 'expo-location';
import { get } from "react-hook-form";
import TabNavigator from "../../navigation/TabNavigator";

const HomeScreen = () => {
  const [loaded] = useFonts({
    CeraBlack: require('../../assets/fonts/CeraPro-Black.otf'),
    CeraBlackItalic: require('../../assets/fonts/CeraPro-BlackItalic.otf'),
    CeraBold: require('../../assets/fonts/CeraPro-Bold.otf'),
    CeraItalic: require('../../assets/fonts/CeraPro-Italic.otf'),
    CeraLight: require('../../assets/fonts/CeraPro-Light.otf'),
    CeraMedium: require('../../assets/fonts/CeraPro-Medium.otf'),
    GigaSansReg: require('../../assets/fonts/GigaSans-Regular.otf'),
    GigaSansBold: require('../../assets/fonts/GigaSans-Bold.otf'),
    GigaSansExtraLight: require('../../assets/fonts/GigaSans-ExtraLight.otf'),
    GigaSansMedium: require('../../assets/fonts/GigaSans-Medium.otf'),
    GigaSansSemiBold: require('../../assets/fonts/GigaSans-SemiBold.otf'),
  });



  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const[userRadius, setUserRadius] = useState("");

  // useEffect(() => {
  //   (async () => {   
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLatitude(location.coords.latitude);
  //     setLongitude(location.coords.longitude);
  //   })();

  // }, []);

  const userId = Auth.Credentials["Auth"]["user"]["attributes"]["sub"];

  const fetchUserData = async () => {
      const fetchedUserData = await getUserData(userId)
      setUserRadius(fetchedUserData[3]);
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  // console.log(userRadius)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  const [loading, setLoading] = useState(false);
  const [dataA, setDataA] = useState(null);
  const [messageA, setMessageA] = useState(null);
  const [dataB, setDataB] = useState(null);
  const [messageB, setMessageB] = useState(null);
  const [dataC, setDataC] = useState(null);

  const navigation = useNavigation();

  const randomImage = [
    require('../../assets/topPhotos/photo1.png'),
    require('../../assets/topPhotos/photo2.jpg'),
    require('../../assets/topPhotos/photo3.png'),
    require('../../assets/topPhotos/photo4.png'),
    require('../../assets/topPhotos/photo5.png'),
    require('../../assets/topPhotos/photo6.png'),
    require('../../assets/topPhotos/photo7.png'),
  ];

  const searchPressed = () => {
    navigation.navigate("SearchScreen", {dataC:dataC["url"]});
  }

  // console.log(dataC["url"])
  
  const fetchData = async () => {
    setLoading(true);
    const fetchedData = await getDetailedRestaurantData({latitude, longitude, userRadius});
    setMessageA(fetchedData[0]);
    setDataA(fetchedData[1]);
    setMessageB(fetchedData[2]);
    setDataB(fetchedData[3]);
    setDataC(fetchedData[4]);
    setLoading(false);
    // console.log("THIS IS DATA A vvvv")
    // console.log(dataA);
  };

  useEffect(() => {
    if(latitude != null && longitude != null && userRadius != null){
      fetchData();
    }
  }, [latitude, longitude, userRadius]);


  if (loading || !dataA || !messageA || !dataB || !messageB || !dataC) {
    return <ActivityIndicator style = {styles.loading} size="large" />; 
  }

  // console.log(dataC["image"])

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.topImage}
        // source={randomImage[Math.floor(Math.random()*randomImage.length)]}
        source={{uri: dataC["image"]}}
      >
        <View style={styles.mask} />
        <View style = {styles.headerTextBox}>
          <Text style = {styles.headerText}>{dataC["message_1"]}</Text>
          <Text style = {styles.headerText}>{dataC["message_2"]}</Text>
          <CustomButton 
            text = {"Search"}
            onPress = {searchPressed}
            type = {'SEARCH'}
          />
        </View>
      </ImageBackground>

      <View style={styles.vertical}>
        <Text style={styles.localText}>{messageA}</Text>
        <ScrollView horizontal={true} style={styles.margin}>
          <FlatList
            data={dataA}
            renderItem={({ item }) => <VerticalRestaurantBox restaurant={item} />}
            numColumns={10}
          />
        </ScrollView>
      </View>

      <View style={styles.horizontal}>
        <Text style={styles.localText}>{messageB}</Text>
        <FlatList
          data={dataB}
          renderItem={({ item }) => <HorizontalRestaurantPage restaurant={item} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
  },
  topImage: {
    height: 220,
    width: "100%",
  },
  mask: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hotSpots: {},
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },
  vertical: {
    marginLeft: 10,
    marginTop: 20,
  },
  horizontal: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  localText: {
    fontSize: 18,
    fontFamily: 'GigaSansSemiBold',
    marginBottom: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: colors.background,
    fontFamily: 'GigaSansSemiBold',
  },
  headerTextBox: {
    marginTop: 61,
    marginLeft: 10
  },
});

export default HomeScreen;
