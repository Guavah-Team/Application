import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import HorizontalRestaurantPage from '../../components/HorizontalRestaurantBox/HorizontalRestaurantPage';
import VerticalRestaurantBox from '../../components/VerticalRestaurantBox';
import Amplify, {Auth} from 'aws-amplify';

const DATA = [
    {
      id: '1',
      title: 'Olive Garden',
      distance: '5.3 Miles',
    },
    {
      id: '2',
      title: 'Taco Bell',
      distance: '8.3 Miles',
    },
    {
      id: '3',
      title: 'El Habenaro',
      distance: '7.3 Miles',
    },
    {
        id: '4',
        title: 'guadaljara',
        distance: '2.3 Miles',
    }
];

const DATA2 = [
    {
      id: '1',
      title: 'TEST Garden',
      distance: '5.3 Miles',
    },
    {
      id: '2',
      title: 'Taco Bell',
      distance: '8.3 Miles',
    },
    {
      id: '3',
      title: 'El Habenaro',
      distance: '7.3 Miles',
    },
    {
        id: '4',
        title: 'guadaAJAJAJAljara',
        distance: '2.3 Miles',
    }
];

function HomeScreen(props) {
    const signOut = () => {
        Auth.signOut();
    }

    const renderItem = ({ item }) => (
        <VerticalRestaurantBox name = {item.title} distance = {item.distance} onPress = {signOut}/>
    );

    const renderItem2 = ({item}) => (
        <HorizontalRestaurantPage name = {item.title} distance = {item.distance}/>
    );

    return (
        <ScrollView style = {styles.container}>
            <ImageBackground style = {styles.topImage} source = {require('../../assets/header.jpg')}>
                <View style = {styles.mask}/>
            </ImageBackground>

            <View style = {styles.vertical}>
                <Text style = {styles.localText}>Local Restaurants</Text>
                <ScrollView horizontal={true} style = {styles.margin}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns = {10}
                    />
                </ScrollView>
            </View>

            <View style = {styles.horizontal}>
                <Text style = {styles.localText}>Recommended</Text>
                    <FlatList
                        data={DATA2}
                        renderItem={renderItem2}
                        keyExtractor={item => item.id}
                    />
            </View>


            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40

    },
    topImage: {
        height: 200,
        width: '100%',
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
    },
    hotSpots: {

    },
    textStyle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
    },
    vertical: {
        marginLeft: 10,
        marginTop: 20,
    },
    horizontal: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    },
    localText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    }


})

export default HomeScreen;