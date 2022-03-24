import React, { useEffect, useState } from "react";
import {View, Text, FlatList, StyleSheet, ScrollView, ImageBackground, ActivityIndicator, RefreshControlBase, Alert, RefreshControl} from "react-native";
import HorizontalRestaurantPage from "../../components/HorizontalRestaurantBox/HorizontalRestaurantPage";
import VerticalRestaurantBox from "../../components/VerticalRestaurantBox";
import Amplify, { Auth } from "aws-amplify";
import {useNavigation} from '@react-navigation/native';
import { getDetailedRestaurantData } from "../../services/requests";
import colors from "../../config/colors/colors";
import CustomButton from "../../components/CustomButton";

import * as Location from 'expo-location';
import { get } from "react-hook-form";

const HomeScreen = ({latitude, longitude}) => {
  const [loading, setLoading] = useState(false);
  const [dataA, setDataA] = useState(null);
  const [messageA, setMessageA] = useState(null);
  const [dataB, setDataB] = useState(null);
  const [messageB, setMessageB] = useState(null);

  console.log(latitude)

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
    navigation.navigate("SearchScreen");
  }
  
  const fetchData = async () => {
    setLoading(true);
    const fetchedData = await getDetailedRestaurantData(latitude, longitude);
    setMessageA(fetchedData[0]);
    setDataA(fetchedData[1]);
    setMessageB(fetchedData[2]);
    setDataB(fetchedData[3]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);



  if (loading || !dataA || !messageA || !dataB || !messageB || !latitude) {
    return <ActivityIndicator style = {styles.loading} size="large" />; 
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.topImage}
        source={randomImage[Math.floor(Math.random()*randomImage.length)]}
      >
        <View style={styles.mask} />
        <View style = {styles.headerTextBox}>
          <Text style = {styles.headerText}>Date night?</Text>
          <Text style = {styles.headerText}>Find a restaurant.</Text>
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
    fontWeight: "600",
    marginBottom: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: colors.background,
    fontWeight: 'bold',
  },
  headerTextBox: {
    marginTop: 61,
    marginLeft: 10
  },
});

export default HomeScreen;
