import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, Button, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth, button } from 'aws-amplify';
import HorizontalReviewBox from '../../components/HorizontalReviewBox';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCtkgG8tkAaoKtARZwjazpggOspoSSArzI';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

function RestaurantScreen({route}){

    const {name} = route.params;
    const {photo} = route.params;
    const {location} = route.params;

    const buttonPressed = () => {
        console.log(navigation)
    }
    
    return(
        <View style = {styles.root}>
            <ImageBackground style = {styles.image} source = {{uri: photo}}>  
                <View style = {styles.mask}/>
                <View style = {styles.headerBox}>
                    <Text style = {styles.text_Primary}>{name}</Text>
                    <Text style = {styles.text_Secondary}>{location}</Text>
                    <CustomButton text = {"Review"} type = {'SEARCH'} onPress = {buttonPressed}/>
                </View>
            </ImageBackground>

            <ScrollView style = {styles.container}>
                <View>
                    <Text style = {styles.headerText}>Directions</Text>
                    <View style = {styles.mapBox}>
                        {/* <MapView
                            style={{ flex: 1 }}
                            provider={PROVIDER_GOOGLE}
                            showsUserLocation
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421}}
                        /> */}
                        <MapView>
                            <MapViewDirections
                                origin={origin}
                                destination={destination}
                                apikey={GOOGLE_MAPS_APIKEY}
                            />
                        </MapView>
                    </View>
                </View>

                <View style = {styles.special}>
                    <Text style = {styles.headerText}>Reviews</Text>
                    <View style = {styles.reviews}>
                        <HorizontalReviewBox username={"Dylan"} userLevel={"Level 5"} userMessage = {"Service was great"} icon = {'thumbs-up'}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        
    },
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    text_Primary: {
        color: colors.primaryText,
        fontWeight: '600',
        fontSize: 32
    },
    text_Secondary: {
        paddingBottom: 10,
        color: colors.primaryText,
        fontWeight: '600',
        fontSize: 18,
    },
    image:{
        width: '100%',
        height: 200,
    },
    headerBox: {
        marginLeft: 10,
        marginTop: '8%',
    },
    headerText: {
        fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        borderRadius: 10,
    },
    mapBox: {
        flex: 1,
        width: '100%',
        height: 150,
    }
})
export default RestaurantScreen;