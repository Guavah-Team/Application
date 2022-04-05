import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import {SvgUri} from 'react-native-svg';
import { useFonts } from 'expo-font';


function RestaurantReview({restaurant}) {
    const {Name, Rating, Review, ProfilePhoto, icon} = restaurant;
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

      function thumbIndicator(Rating) {
          if(Rating === 1){
            iconName = 'thumb-up';
          }else{
            iconName = 'thumb-down';
          }
          return iconName;
      }

    return (
        <View style = {styles.container}>
            <View style = {styles.userBox}>
                <SvgUri style = {styles.userImage} uri={ProfilePhoto}/>
                <View style = {styles.textBox}>
                    <Text style = {styles.user}>{Name}</Text>
                </View>
                <MaterialIcons name = {thumbIndicator(Rating)} style = {styles.thumb}/>
            </View>
            <Text style = {styles.message}>{Review}</Text>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 110,
        paddingLeft: 24,
        paddingTop: 20,
        backgroundColor: colors.white,
        borderRadius: 6,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom: 10,
    },
    userBox: {
        flexDirection: 'row',
    },
    textBox: {
        marginLeft: 5,
    },
    user: {
        fontSize: 16,
        fontFamily: 'GigaSansSemiBold',
    },
    userImage: {
        width: 45,
        height: 45,
    },
    rank: {
        fontSize: 12,
        fontFamily: 'GigaSansReg',
    },
    message: {
        fontSize: 12,
        fontFamily: 'GigaSansReg',
    },
    thumb: {
        fontSize: 25,
        position: 'absolute',
        right: 24,
    },
})

export default RestaurantReview;