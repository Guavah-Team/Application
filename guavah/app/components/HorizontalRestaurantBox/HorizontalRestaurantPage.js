import React from 'react';
import {View, Text, Pressable, StyleSheet, ImageBackground} from 'react-native';

function HorizontalRestaurantPage({onPress, text, rating, distance, image}) {
    return (
        <Pressable onPress = {() => alert("HE")} style = {styles.container}>
            <ImageBackground style = {styles.backgroundImage} source = {require('../../assets/test.png')}>
                <Text> hoe</Text>
            </ImageBackground>
        </Pressable>


    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: 100,


        backgroundColor: 'red',
        borderRadius: 6,
    },
    text: {

    },
    backgroundImage: {
        flex: 1,
    }
})

export default HorizontalRestaurantPage;