import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, Button, Alert, Modal, FlatList, TextInput, Pressable} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Amplify, { Auth, button } from 'aws-amplify';
import HorizontalReviewBox from '../../components/HorizontalReviewBox';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Ionicons} from '@expo/vector-icons';
import { getRestaurantReviews } from '../../services/requests';
import { postReviewData } from '../../services/postReviewData';

import config from '../../../src/aws-exports';
Amplify.configure(config);

const GOOGLE_MAPS_APIKEY = 'AIzaSyCtkgG8tkAaoKtARZwjazpggOspoSSArzI';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

function RestaurantScreen({route}){
    const navigation = useNavigation();
    const [data, setData] = useState(null);


    const {name} = route.params;
    const {photo} = route.params;
    const {location} = route.params;
    const {FSQID} = route.params;

    const [review, setReview] = useState('');
    const [commentVisible, setCommentVisible] = useState(false);
    const [thumbsVisible, setThumbsVisible] = useState(false);
    const[rating, setRating] = useState(0);

    const fetchReviews = async () => {
        const fetchedReviews = await getRestaurantReviews(FSQID);
        setData(fetchedReviews[0]);
    }

    

    console.log(FSQID);
    console.log(Auth.currentSession);

    useEffect(() => {
        fetchReviews();
    }, []);
    
    const pushData = async () => {
        postReviewData(rating, review, FSQID);
    };

    const buttonPressed = () => {
        setThumbsVisible(true);
    }

    const returnHome = () => {
        navigation.navigate('HomeScreen');
    }
    
    return(
        <View style = {styles.root}>


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
                        <Text style = {styles.modalheader}>Leave a Comment</Text>
                        <TextInput 
                            style = {styles.modalinput} 
                            placeholder = 'Optional' 
                            multiline = {true}
                            onChangeText = {newReview => setReview(newReview)}
                            defaultValue = {review}
                        />
                        <View style = {styles.modalbuttonView}>
                            <Pressable style = {styles.buttonModal} onPress={() => {setCommentVisible(!commentVisible); pushData(rating, review);}}>
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
                    <View style = {styles.modalThumbView}>
                        <Text style = {styles.thumbHeader}>Rate Your Experience</Text>
                        <View style = {styles.thumbs}>
                            <Pressable style = {styles.thumbLocation} onPress={() => {setCommentVisible(true); setThumbsVisible(false); setRating(1);}}>
                                <Image style = {styles.ThumbsUp} source = {require('../../assets/Thumbs/ThumbsUp.png')}/>
                            </Pressable>
                            <Pressable  style = {styles.dislike} onPress={() => {setCommentVisible(true); setThumbsVisible(false); setRating(0);}}>
                                <Image style = {styles.ThumbsDown} source = {require('../../assets/Thumbs/ThumbDown.png')}/>
                            </Pressable>
                        </View> 
                        <Pressable style = {styles.modalcancel} onPress={() => setThumbsVisible(false)}>
                            <Text style = {styles.textStyleSecondaryModal}>Cancel</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </Modal>


            <ImageBackground style = {styles.image} source = {{uri: photo}}>  
                <View style = {styles.mask}/>
                <Ionicons onPress = {returnHome} name="chevron-back-outline" size="30" style = {styles.backArrow}/>
                <View style = {styles.headerBox}>
                    <Text style = {styles.text_Primary}>{name}</Text>
                    <Text style = {styles.text_Secondary}>{location}</Text>
                    <CustomButton text = {"Review"} type = {'SEARCH'} onPress = {buttonPressed}/>
                </View>
            </ImageBackground>

            <ScrollView style = {styles.container}>
                <View style = {styles.special}>
                    <Text style = {styles.headerText}>Reviews</Text>
                    <View style = {styles.reviews}>
                        {/* <HorizontalReviewBox username={"Dylan"} userLevel={"Level 5"} userMessage = {"Service was great"} icon = {'thumbs-up'}/> */}
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <HorizontalReviewBox restaurant={item} />}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        
    },
    backArrow: {
        color: 'white',
        marginLeft: 10,
        marginTop: 35
    },
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    text_Primary: {
        color: colors.primaryText,
        fontWeight: '600',
        fontSize: 32,
    },
    text_Secondary: {
        paddingBottom: 10,
        color: colors.primaryText,
        fontWeight: '600',
        fontSize: 18,
    },
    image:{
        width: '100%',
        height: 220,
    },
    headerBox: {
        marginLeft: 10,
        // marginTop: '2%',
    },
    headerText: {
        fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        // borderRadius: 10,
    },
    mapBox: {
        flex: 1,
        width: '100%',
        height: 150,
    },
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
    modalThumbView:{
        backgroundColor: colors.background,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '50%',
        width: '90%',
    },
    modalheader:{
        fontWeight: 'bold',
        paddingTop: 40,
        paddingBottom: 50,

    },
    modalcancel:{
        alignItems: 'center',
    },
    thumbHeader:{
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '10%',
        paddingBottom: '25%',
    },
    modalinput:{
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
    modalbuttonView:{
       
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
    },
    thumbs:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        
    },
    ThumbsUp:{
        height: 116.7,
        width: 135,
    },
    ThumbsDown:{
        height: 116.7,
        width: 134.8,
    },
})
export default RestaurantScreen;