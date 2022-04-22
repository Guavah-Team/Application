import React from 'react';
import {StyleSheet, Pressable, ImageBackground, Text, View, Alert, Image} from 'react-native';
import colors from '../../config/colors/colors';
import {useNavigation} from '@react-navigation/native';
import placeHolder from '../../assets/defaults/VerticalDefault.png';
import { useFonts } from 'expo-font';
import { postVersusData } from '../../services/postVersusData';

function VersusRestaurantBox({restaurant, fullData, restaurantNum, type="SMALL"}) {
    const {name, rating, distance, photo, location, id, photo_gallary} = restaurant;

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

    const navigation = useNavigation();

    const pressHandler = () =>{
    //    postVersusData('test');
        // console.log(restaurant);
        // console.log(restaurantNum);
        fullData[0]['userSelection'] = restaurantNum;
        console.log(fullData);
    }

    // console.log(photo);

    return (
        <Pressable 
        onPress={() =>pressHandler()}
        style = {[styles[`container_${type}`], styles.shadowProp]}>
            <ImageBackground imageStyle = {{borderRadius: 10}} style = {styles.backgroundImage} defaultSource={require('../../assets/defaults/VerticalDefault.png')} source = {{uri: restaurant[3]}}>
                <View style = {styles.mask}/>
                <View style = {styles.topTextBox}>
                    <Text style = {styles.restaurantNameText}> {restaurant[0]} </Text>
                </View>
                {/* <View style = {styles.centerLogo}>
                    <Image source = {require('../../assets/ICONS/Tier-1-Badge-(Base).png')}></Image>
                </View> */}
                <View style = {styles.bottomTextBox}>
                    {/* <Text style = {styles.distanceText}> {(distance / 1609).toFixed(2)} Miles </Text> */}
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container_SMALL: {
        width: 150,
        height: 316,
        marginRight: 10,
    },
    container_LARGE: {
        width: 150,
        height: 316,
        marginRight: 10,
    },
    restaurantNameText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'GigaSansSemiBold',
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        borderRadius: 10,
    },
    distanceText: {
        color: colors.white,
        fontSize: 12,
        textTransform: 'capitalize',
        fontFamily: 'GigaSansReg'
    },
    topTextBox: {
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTextBox: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 21,
        left: 43,
        right: 43
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    centerLogo: {
        position: 'absolute',
        top: 89,
        left: 63,
        right: 50,
        bottom: 78,
    }
})

export default VersusRestaurantBox;