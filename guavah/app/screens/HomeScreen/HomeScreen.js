import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from "react-native";
import HorizontalRestaurantPage from "../../components/HorizontalRestaurantBox/HorizontalRestaurantPage";
import VerticalRestaurantBox from "../../components/VerticalRestaurantBox";
import Amplify, { Auth } from "aws-amplify";
import axios from "axios";

import { getDetailedRestaurantData } from "../../services/requests";

const HomeScreen = () => {
  


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    // url = "https://dt9tx0ox2d.execute-api.us-west-1.amazonaws.com/test/home?latlong=33.9806,-117.3755&radius=2000";
    // await axios
    //   .get(url)
    //   .then(function (response) {
    //     const fetchedData = response.data["body"];
    //     setData(fetchedData);
    //   })
    //   .catch(function (error) {
    //     if (error.response)
    //       // error from server
    //       console.log(error.response.data.message);
    //     else console.log("Error Occured. Please try Again.!"); // error from app side
    //   });

    const fetchedData = await getDetailedRestaurantData();
    setData(fetchedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading || !data) {
    return <ActivityIndicator size="large" />; 
  }

  const {
    name,
    distance,
  } = data;

 

  const renderItem = ({ item }) => (
    <VerticalRestaurantBox name={item.name} distance={item.distance}/>
  );

  const renderItem2 = ({ item }) => (
    <HorizontalRestaurantPage name={item.name} distance={item.distance} />
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.topImage}
        source={require("../../assets/header.jpg")}
      >
        <View style={styles.mask} />
      </ImageBackground>

      <View style={styles.vertical}>
        <Text style={styles.localText}>Local Restaurants</Text>
        <ScrollView horizontal={true} style={styles.margin}>
          <FlatList
            data={data}
            renderItem={({ item }) => <VerticalRestaurantBox restaurant={item} />}
            numColumns={10}
          />
        </ScrollView>
      </View>

      {/* <View style={styles.horizontal}>
        <Text style={styles.localText}>Recommended</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text>{name}</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  topImage: {
    height: 200,
    width: "100%",
  },
  mask: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
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
});

export default HomeScreen;
