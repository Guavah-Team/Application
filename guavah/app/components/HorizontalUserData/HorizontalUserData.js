import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../config/colors/colors';
import Amplify, { Auth } from 'aws-amplify';

function HorizontalUserData({text}) {
    const userPicture = async (data) => {
        const {name} = name;
    }
    return (
        <View>
            <Text style = {styles.text_Primary}>UserName</Text>
            <Text style = {styles.text_SECONDARY}>Level 10</Text>
            <Text style = {styles.text_TERTIARY}>Pull the like or dislike from dynamo</Text>
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
    },
    text_SECONDARY: {
        color: colors.accent,

    },
    text_TERTIARY: {
        textAlign: 'right'
    }
})

export default HorizontalUserData;