import React from 'react';
import {View, Text, Pressable, StyleSheet, ImageBackground, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

//ICON NAME
//settings, history, logout

function HorizontalProfileBox({onPress, name, description, iconName}) {

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
    },
    icon: {
        marginLeft: 21,
    },
    textBox: {
        marginLeft: 25,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        // textTransform: 'capitalize',
    }
    
})

export default HorizontalProfileBox;