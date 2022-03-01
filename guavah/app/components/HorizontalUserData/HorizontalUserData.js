import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';

function HorizontalUserData({text}) {
    const userPicture = async (data) => {
        const {name} = name;
    }
    return (
        <View>
            
            name
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: colors.accent,
        borderRadius: 100,
    },
    container_SECONDARY: {
        borderColor: colors.accent,
        borderWidth: 2,
        borderRadius: 100,
    },
    container_TERTIARY: {
        marginVertical: 2,
    },

    text: {
        color: colors.dark,        

    },
    text_SECONDARY: {
        color: colors.accent,
    },
    text_TERTIARY: {
        color: 'gray',
        // alignSelf: 'stretch',
    }
})

export default HorizontalUserData;