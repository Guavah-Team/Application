import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

var iconHeight = 50;
var iconWidth = 50;

function NavigationBar(props) {
    return (
        <View style = {styles.navContainer}>

        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {

        height: 60,
        width: '100%',

        backgroundColor: 'red',
    }
})

export default NavigationBar;