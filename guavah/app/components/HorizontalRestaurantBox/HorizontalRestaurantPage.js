import React from 'react';
import {View, Text, Pressable, StyleSheet, ImageBackground} from 'react-native';
import colors from '../../config/colors/colors';

function HorizontalRestaurantPage({onPress, name, rating, distance, backgroundImage}) {

    return (
        <Pressable onPress = {onPress} style = {[styles.container, styles.shadowProp]}>
            <ImageBackground imageStyle = {{borderRadius: 10}} style = {styles.backgroundImage} source = {backgroundImage}>
                <View style = {styles.mask}/>
                <View style = {styles.textBox}>
                    <Text style = {styles.restaurantNameText}> {name} </Text>
                    <Text style = {styles.distanceText}> {distance} </Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: 100,
    },
    restaurantNameText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    backgroundImage: {
        flex: 1,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        borderRadius: 10,
    },
    distanceText: {
        color: colors.white,
        fontSize: 12,
        textTransform: 'capitalize',
    },
    textBox: {
        marginLeft: 25,
        marginTop: 9,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
})

export default HorizontalRestaurantPage;