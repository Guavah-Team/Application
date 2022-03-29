import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons'; 

function RestaurantReview({username, userLevel, userMessage, icon}) {

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
        <View style = {styles.container}>
            <View style = {styles.userBox}>
                <Image style = {styles.userImage} source = {require('../../assets/defaults/HorizontalDefault.png')}></Image>
                <View style = {styles.textBox}>
                    <Text style = {styles.user}>{username}</Text>
                    <Text style = {styles.rank}>{userLevel}</Text>
                </View>
                <Ionicons name = {icon} style = {styles.thumb}/>
            </View>
            <Text style = {styles.message}>{userMessage}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingLeft: 24,
        paddingTop: 20,
        backgroundColor: colors.white,
        borderRadius: 6,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
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
        width: 32,
        height: 32,
        borderRadius: 100
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
        fontSize: 20,
        position: 'absolute',
        right: 24,
    }
})

export default RestaurantReview;