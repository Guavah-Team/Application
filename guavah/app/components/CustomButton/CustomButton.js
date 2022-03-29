import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import colors from '../../config/colors/colors';
import {useFonts} from 'expo-font';

function CustomButton({onPress, text, type = "PRIMARY", bgColor, fgColor}) {

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
                    fontFamily ? {font}: {},
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
        // flex: 1,
        
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
        width: '40%'
    },
    container_FIXED:{
        backgroundColor: colors.accent,
        borderRadius: 100,
        width: '50%',
        position: 'absolute',

    },
    container_SEARCH: {
        backgroundColor: colors.accent,
        borderRadius: 6,
        width: 89,
        height: 26,
        padding: 0,
        justifyContent: 'center'
    },

    text: {
        color: colors.white,
        fontFamily: 'Source Sans Pro',    

    },
    text_SECONDARY: {
        color: colors.accent,
         
    },
    text_TERTIARY: {
        color: 'gray',
        // alignSelf: 'stretch',
        fontFamily: 'GigaSansMedium'
    },
    text_SEARCH: {
        color: colors.white,  
    },
})

export default CustomButton;