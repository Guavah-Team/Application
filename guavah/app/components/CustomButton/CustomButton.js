import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import colors from '../../config/colors/colors';

function CustomButton({onPress, text, type = "PRIMARY", bgColor, fgColor}) {
    return (
        <Pressable 
            onPress={onPress} 
            style = {[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            <Text 
                style = {[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color : fgColor} : {},
                ]}
            >
                {text}
            </Text>
        </Pressable>
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
    container_SPECIAL:{
        backgroundColor: colors.accent,
        borderRadius: 15,
        width: '40%',
        alignContent: 'flex-end'
    
    },
    container_FIXED:{
        backgroundColor: colors.accent,
        borderRadius: 100,
        width: '50%',
        position: 'absolute',
    },

    text: {
        color: colors.white,        

    },
    text_SECONDARY: {
        color: colors.accent,
    },
    text_TERTIARY: {
        color: 'gray',
        // alignSelf: 'stretch',
    }
})

export default CustomButton;