import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet, ImageBackground} from 'react-native';
import colors from '../../config/colors/colors';
import {useNavigation} from '@react-navigation/native';
import {useFonts} from 'expo-font';

function HorizontalRestaurantPage({restaurant}) {
    const {name, rating, distance, photo, price, location, id, photo_gallary} = restaurant;
    const navigation = useNavigation();

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

      const [dollarSign, setDollarSign] = useState();

    // console.log(photo);

    const dollarSignConverter = () => {
        if(price === 1){
            setDollarSign("$");
        }else if(price === 2){
            setDollarSign("$$");
        }else{
            setDollarSign("$$$");
        }
    }


    useEffect(() => {
        dollarSignConverter();
    }, [])
    
    

    return (
        <Pressable 
        onPress={() => {
            navigation.navigate('RestaurantScreen', {
                name: name,
                photo: photo,
                location: location,
                FSQID: id,
                photo_gallary: photo_gallary,
            });
        }}
        style = {[styles.container, styles.shadowProp]}
        >
            <ImageBackground imageStyle = {{borderRadius: 10}} style = {styles.backgroundImage} defaultSource={require('../../assets/defaults/HorizontalDefault.png')} source= {{uri: photo}}>
                <View style = {styles.mask}/>
                <View style = {styles.textBox}>
                    <Text style = {styles.restaurantNameText}> {name} </Text>
                    <Text style = {styles.distanceText}> {(distance / 1609).toFixed(2)} Miles </Text>
                    <Text style = {styles.priceText}>{dollarSign}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: 100,
        marginBottom: 10,
    },
    restaurantNameText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'GigaSansSemiBold',
        textTransform: 'capitalize',
        textAlign: 'left',
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
        fontFamily: 'GigaSansReg',
        marginLeft: 2,
    },
    textBox: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 9,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    priceText: {
        color: colors.white,
        fontSize: 12,
        textTransform: 'capitalize',
        fontFamily: 'GigaSansReg',
        marginLeft: 5,
    },
})

export default HorizontalRestaurantPage;