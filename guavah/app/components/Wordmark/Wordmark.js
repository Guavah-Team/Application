import React from 'react';
import colors from '../../config/colors/colors';
import {StyleSheet, View, Text} from 'react-native';
import {useFonts} from 'expo-font';

function Wordmark(props) {
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

    if (!loaded){
        return null;
    }

    return (
        <Text style = {styles.wordmark}>guavah</Text>
    );
}

const styles = StyleSheet.create({
    wordmark:{
        fontSize: 60,
        fontFamily: 'CeraMedium',
        color: colors.accent
    }
    
})

export default Wordmark;