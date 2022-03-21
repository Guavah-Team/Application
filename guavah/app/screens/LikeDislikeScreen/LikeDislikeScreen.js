import React, { useState } from 'react';
import {StyleSheet, Image, View, Text, ScrollView, Alert, Pressable} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

function LikeDislikeScreen(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.headerText}>Rate Your Experience</Text>
            <View style = {styles.Thumbs}>
                <View style = {styles.likes}>
                    <Pressable style = {styles.pressables} onPress = {Alert.alert('ThumbsUp Pressed')}>
                        <Image style = {styles.ThumbsUp} source = {require('../../assets/Thumbs/ThumbsUp.png')}/>
                    </Pressable>
                    <Pressable style = {styles.pressables} onPress = {Alert.alert('ThumbsDown Pressed')}>
                        <Image style = {styles.ThumbsDown} source = {require('../../assets/Thumbs/ThumbDown.png')}/>
                    </Pressable>
                </View>
            </View>
            <Text> 1 of 2 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        alignItems: 'center',
        flex: 1
    },
    Thumbs:{
        justifyContent: 'center',
        flex: 1
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20
    },
    likes: {
        flexDirection: 'row',
    },
    pressables:{
        paddingHorizontal: 20
    },
    ThumbsUp:{
        height: 110,
        width: 130,
        paddingHorizontal: 10
    },
    ThumbsDown:{
        height: 110,
        width: 128,
        paddingHorizontal: 10,
        
     
        
    },
    
})

export default LikeDislikeScreen;