import React from 'react';
import {StyleSheet, Pressable, ImageBackground, Text, View, Alert, Image} from 'react-native';
import colors from '../../config/colors/colors';
import {useNavigation} from '@react-navigation/native';
import placeHolder from '../../assets/defaults/VerticalDefault.png';
import { useFonts } from 'expo-font';

function FeaturedPhotos({restaurant, type="SMALL"}) {
    const {photo} = restaurant;

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

    return (
        <Pressable 
        style = {[styles[`container_${type}`], styles.shadowProp]}>
            <ImageBackground imageStyle = {{borderRadius: 10}} style = {styles.backgroundImage} defaultSource={require('../../assets/defaults/VerticalDefault.png')} source = {{uri: photo}}>
                <View style = {styles.mask}/>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container_SMALL: {
        width: 150,
        height: 200,
        marginRight: 10,
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
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
})

export default FeaturedPhotos;