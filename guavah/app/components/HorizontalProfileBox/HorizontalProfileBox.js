import React from 'react';
import {View, Text, Pressable, StyleSheet, ImageBackground, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import {useFonts} from 'expo-font';

//ICON NAME
//settings, history, logout

function HorizontalProfileBox({onPress, name, description, iconName}) {

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
        <Pressable onPress = {onPress} style = {[styles.container, styles.shadowProp]}>
            <View style = {styles.root}>
                <MaterialIcons style = {styles.icon} name = {iconName} size = {48}/>
                <View style = {styles.textBox}>
                    <Text style = {styles.name}>{name}</Text>
                    <Text style = {styles.description}>{description}</Text>
                </View>

            </View>
            
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    container: {
        width: '100%',
        height: 100,
        backgroundColor: colors.background,
        borderRadius: 6,
        marginBottom: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
    },
    icon: {
        marginLeft: 21,
    },
    textBox: {
        marginLeft: 25,
    },
    name: {
        fontSize: 18,
        fontFamily: 'GigaSansBold',
        textTransform: 'capitalize',
    },
    description: {
        fontSize: 14,
        fontFamily: 'GigaSansReg',
        textTransform: 'capitalize',
    }
    
})

export default HorizontalProfileBox;