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

            {/* Comment Modal */}
            <Modal
                animationType="none"
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
                        <Pressable  onPress={() => setCommentVisible(false)}>
                            <Text style = {styles.textStyleSecondary}>Skip</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            
            {/* Thumbs Modal */}
            <Modal
                animationType="none"
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
                        <Pressable style={styles.button} onPress={() => {setCommentVisible(true); setThumbsVisible(false);}}>
                            <Text style={styles.textStyle}>Write Review?</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={styles.button}
                onPress={() => setThumbsVisible(true)}
                >
                <Text style={styles.textStyle}>Review</Text>
            </Pressable>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background
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
    header:{
        
    },
    input:{
       
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
    textStyle:{
        color: colors.white,
    },
    textStyleSecondary:{
        color: 'gray'
    }
})

export default ReviewScreen;