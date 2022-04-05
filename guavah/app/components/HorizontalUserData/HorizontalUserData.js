import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../config/colors/colors';
import Amplify, { Auth } from 'aws-amplify';




function HorizontalUserData({name, level, iconName}) {
    
    
    return (
        <View>
            <Text style = {styles.text_Primary}>{name}</Text>
            <Text style = {styles.text_SECONDARY}>{'Level ' + level}</Text>
            <View style = {styles.image}>
            <Image source = {require('../../assets/LikeDislike/Like.png')}/>
            </View>
            
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        width: '80%',
        flex: 1,

        padding: 15,
        marginVertical: 5,
    },

    text_Primary: {
        color: colors.dark,  
        fontWeight: 'bold'
    },
    text_SECONDARY: {
        color: colors.accent,

    },
    text_TERTIARY: {
        textAlign: 'right'
    },
    image:{
        flex: 1,
        width: 10,
        height: 10,
        resizeMode: 'contain',
        position: 'absolute',
        right: 20,
        top: -3

    }
})

export default HorizontalUserData;