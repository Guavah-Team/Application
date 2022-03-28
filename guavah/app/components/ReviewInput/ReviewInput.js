import React from 'react';
import {StyleSheet, View, Text, Pressable, Image, TextInput} from 'react-native';
import colors from '../../config/colors/colors';

function ReviewInput({}) {
    return (
       <View style = {styles.container}>
            <TextInput placeholder='Optional'>
                
            </TextInput>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
})

export default ReviewInput;