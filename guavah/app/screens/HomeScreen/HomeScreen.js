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
  const [dataA, setDataA] = useState(null);
  const [messageA, setMessageA] = useState(null);
  const [dataB, setDataB] = useState(null);
  const [messageB, setMessageB] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const fetchedData = await getDetailedRestaurantData();
    setMessageA(fetchedData[0]);
    setDataA(fetchedData[1]);
    setMessageB(fetchedData[2]);
    setDataB(fetchedData[3]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading || !dataA || !messageA || !dataB || !messageB) {
    return <ActivityIndicator style = {styles.loading} size="large" />; 
  }

  console.log(dataA);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.topImage}
        source={require("../../assets/header.jpg")}
      >
        <View style={styles.mask} />
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
  loading: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default HomeScreen;
