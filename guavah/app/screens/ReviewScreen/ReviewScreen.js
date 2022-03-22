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
                <View style = {styles.containerModal}>
                    <View style = {styles.modalView}>
                        <Text style = {styles.header}>Leave a Comment</Text>
                        <TextInput style = {styles.input} placeholder = 'Optional' multiline = {true}/>
                        <View style = {styles.buttonView}>
                        <Pressable style = {styles.buttonModal} onPress={() => setCommentVisible(!commentVisible)}>
                            <Text style = {styles.textStyleModal}>Submit</Text>
                        </Pressable>
                        </View>
                        
                        <Pressable  onPress={() => setCommentVisible(false)}>
                            <Text style = {styles.textStyleSecondaryModal}>Skip</Text>
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
                <View style = {styles.containerModal}>
                    <View style = {styles.modalView}>
                        <Pressable style = {styles.buttonModal} onPress={() => setThumbsVisible(!thumbsVisible)}>
                            <Text style = {styles.textStyleModal}>close</Text>
                        </Pressable>
                        <Pressable style={styles.buttonModal} onPress={() => {setCommentVisible(true); setThumbsVisible(false);}}>
                            <Text style={styles.textStyleModal}>Write Review?</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={styles.buttonModal}
                onPress={() => setThumbsVisible(true)}
                >
                <Text style={styles.textStyleModal}>Review</Text>
            </Pressable>

        </View>
        
    )
}

const styles = StyleSheet.create({
    containerModal:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        paddingTop: '20%'
    },
    modalView:{
        backgroundColor: colors.background,
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '50%',
        width: '90%',

    },
    header:{
        fontWeight: 'bold',
        paddingTop: 40,
        paddingBottom: 50,
        
    },
    input:{
       borderWidth: 1,
       borderColor: 'gray',
       borderRadius: 10,
       width: '65%',
       height: '25%',
    },
    buttonModal:{
        borderRadius: 30,
        elevation: 2,
        backgroundColor: colors.accent,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonView:{
       
        alignItems: 'center',
        paddingTop: '20%',
        flex: 1
    },
    textStyleModal:{
        color: colors.white,
    },
    textStyleSecondaryModal:{
        color: 'gray',
        paddingBottom: 10
    }
})

export default ReviewScreen;