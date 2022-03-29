import React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import colors from '../../config/colors/colors';

function ThumbsUp({onPress}) {
    return (
        <Pressable 
            onPress={onPress} 
            style = {[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            <Image/>
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
})

export default ThumbsUp;