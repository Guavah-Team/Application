import React from 'react';
import colors from '../../config/colors/colors';
import {StyleSheet, View, Text} from 'react-native';

function Wordmark(props) {
    return (
        <Text style = {styles.wordmark}>guavah</Text>
    );
}

const styles = StyleSheet.create({
    wordmark: {
        fontSize: 60,
        fontWeight: '500',
        color: colors.accent,
    },
})

export default Wordmark;