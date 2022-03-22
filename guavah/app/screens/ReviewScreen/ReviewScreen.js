import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, TextInput, Modal, Pressable, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import RestaurantReview from '../../components/RestaurantReview';

function ReviewScreen(){
    const [commentVisible, setCommentVisible] = useState(false);
    const [thumbsVisible, setThumbsVisible] = useState(false);
    const [randomVisible, setrandomVisible] = useState(false);

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={commentVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setCommentVisible(!commentVisible);
                }}
            >
                <View style = {styles.container}>
                    <View style = {styles.modalView}>
                        <Text style = {styles.header}>Leave a Comment</Text>
                        <TextInput style = {styles.input} placeholder = 'Optional' multiline = {true}/>
                        <Pressable style = {styles.button} onPress={() => setCommentVisible(!commentVisible)}>
                            <Text style = {styles.textStyle}>Submit</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible = {thumbsVisible}
                onRequestClose={() => {
                    Alert.alert("Thumbs has been closed"); 
                setThumbsVisible(!thumbsVisible);
                }}
            >
                <View style = {styles.container}>
                <View style = {styles.modalView}>
                    <Pressable style = {styles.button} onPress={() => setThumbsVisible(!thumbsVisible)}>
                        <Text style = {styles.textStyle}>close</Text>
                    </Pressable>
                    
                </View>
                </View>
                
            </Modal>
            
            <Pressable
                style={[styles.tempbutton, styles.buttonOpen]}
                onPress={() => setCommentVisible(true)}
            >
                <Text style={styles.textStyle}>Write Review?</Text>
            </Pressable>
            <Pressable
                style={[styles.tempbutton, styles.buttonOpen]}
                onPress={() => setThumbsVisible(true)}
            >
                <Text style={styles.textStyle}>Thumbs</Text>
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: .5,
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    root:{
        
    },
    modalView:{
        backgroundColor: colors.background,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    status:{
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    header:{
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: '15%',
        paddingTop: '10%'
    },
    base:{
        justifyContent: 'flex-end'
    },
    input:{
        width:'70%',
        height: '40%',
        borderWidth: 1,
        borderColor: colors.light,
        borderRadius: 5,
        paddingBottom: '10%'
    },
    button:{
        borderRadius: 30,
        elevation: 2,
        backgroundColor: colors.accent,
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    tempbutton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: colors.accent
      },
    buttons: {
        paddingTop: '10%',
        flex: 1,
    },
    buttonClose:{
        backgroundColor: colors.accent,
    },
    buttonOpen: {
        backgroundColor: colors.accent,
    },
    textStyle:{
        color: colors.white,
    }
})

export default ReviewScreen;