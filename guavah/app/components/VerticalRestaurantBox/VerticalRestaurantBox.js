import React from 'react';
import {StyleSheet, Pressable, ImageBackground, Text, View} from 'react-native';
import colors from '../../config/colors/colors';

function VerticalRestaurantBox({onPress, name, rating, distance, backgroundImage}) {
    return (
        <Pressable onPress = {onPress} style = {[styles.container, styles.shadowProp]}>
            <ImageBackground imageStyle = {{borderRadius: 10}} style = {styles.backgroundImage} source = {backgroundImage}>
                <View style = {styles.mask}/>
                <View style = {styles.topTextBox}>
                    <Text style = {styles.restaurantNameText}> {name} </Text>
                </View>
                <View style = {styles.bottomTextBox}>
                    <Text style = {styles.distanceText}> {distance} </Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
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
    topTextBox: {
        marginLeft: 14,
        marginTop: 14,
    },
    bottomTextBox: {
        marginTop: 126,
        alignItems: 'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
})

export default VerticalRestaurantBox;