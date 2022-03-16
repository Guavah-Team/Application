import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';
import HorizontalUserData from '../HorizontalUserData';

function RestaurantReview({text}) {

    return (
        <View style = {styles.container}>
            <View style = {styles.userBox}>
                <Image style = {styles.userImage} source = {require('../../assets/defaults/HorizontalDefault.png')}></Image>
                <View style = {styles.textBox}>
                    <Text style = {styles.user}>Dylan Guzman</Text>
                    <Text style = {styles.rank}>Level 4</Text>
                </View>
            </View>
            <Text style = {styles.message}>The young lady that helped us was very nice and they sat us very quickly and food was good.</Text>
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
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    userBox: {
        flexDirection: 'row',
    },
    textBox: {
        marginLeft: 5,
    },
    user: {
        fontSize: 16,
        fontWeight: '600',
    },
    userImage: {
        width: 32,
        height: 32,
        borderRadius: 100
    },
    rank: {
        fontSize: 12,
        fontWeight: '400',
    },
    message: {
        fontSize: 12,
        fontWeight: '400',
    }
})

export default RestaurantReview;