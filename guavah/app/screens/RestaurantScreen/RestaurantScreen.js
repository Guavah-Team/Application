import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, ImageBackground, Button, Alert, Modal, FlatList, TextInput, Pressable, Keyboard} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Amplify, { Auth, button } from 'aws-amplify';
import HorizontalReviewBox from '../../components/HorizontalReviewBox';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { getRestaurantReviews } from '../../services/requests';
import { postReviewData } from '../../services/postReviewData';

import {useFonts} from 'expo-font';
import VerticalRestaurantBox from '../../components/VerticalRestaurantBox';
import FeaturedPhotos from '../../components/FeaturedPhotos/FeaturedPhotos';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCtkgG8tkAaoKtARZwjazpggOspoSSArzI';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

function RestaurantScreen({route}){
    const navigation = useNavigation();
    const [data, setData] = useState(null);


    const [loaded] = useFonts({
        CeraBlack: require('../../assets/fonts/CeraPro-Black.otf'),
        CeraBlackItalic: require('../../assets/fonts/CeraPro-BlackItalic.otf'),
        CeraBold: require('../../assets/fonts/CeraPro-Bold.otf'),
        CeraItalic: require('../../assets/fonts/CeraPro-Italic.otf'),
        CeraLight: require('../../assets/fonts/CeraPro-Light.otf'),
        CeraMedium: require('../../assets/fonts/CeraPro-Medium.otf'),
        GigaSansReg: require('../../assets/fonts/GigaSans-Regular.otf'),
        GigaSansBold: require('../../assets/fonts/GigaSans-Bold.otf'),
        GigaSansExtraLight: require('../../assets/fonts/GigaSans-ExtraLight.otf'),
        GigaSansMedium: require('../../assets/fonts/GigaSans-Medium.otf'),
        GigaSansSemiBold: require('../../assets/fonts/GigaSans-SemiBold.otf'),
      });

    const {name} = route.params;
    const {photo} = route.params;
    const {location} = route.params;
    const {FSQID} = route.params;
    const {photo_gallary} = route.params;

    const [review, setReview] = useState('');
    const [commentVisible, setCommentVisible] = useState(false);
    const [thumbsVisible, setThumbsVisible] = useState(false);
    const[rating, setRating] = useState(0);

    const fetchReviews = async () => {
        const fetchedReviews = await getRestaurantReviews(FSQID);
        setData(fetchedReviews[0]);
    }

    const userId = Auth.Credentials["Auth"]["user"]["attributes"]["sub"];

    useEffect(() => {
        fetchReviews();
    }, []);
    
    const pushData = async () => {
        postReviewData(rating, review, FSQID, userId);
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
                        <Pressable style = {styles.cancel} onPress={() => setCommentVisible(false)}>
                            <MaterialIcons name='cancel' size={23} color={colors.light} style = {styles.exitButton}/>
                        </Pressable>
                        <Text style = {styles.modalheader}>Leave a Comment</Text>
                        <TextInput 
                            style = {styles.modalinput} 
                            placeholder = 'Optional' 
                            multiline = {true}
                            onChangeText = {newReview => setReview(newReview)}
                            defaultValue = {review}
                            onSubmitEditing = {() => {
                                Keyboard.dismiss();
                            }}
                        />
                        <View style = {styles.modalbuttonView}>
                            <Pressable style = {styles.buttonModal} onPress={() => {setCommentVisible(!commentVisible); pushData(rating, review);}}>
                                <Text style = {styles.textStyleModal}>Submit</Text>
                            </Pressable>
                        </View>
                        <View style = {styles.tabs}>
                            <Text style = {styles.footerText}>2 of 2</Text>
                            <View style = {styles.periodsComment}>
                                <MaterialIcons name = 'fiber-manual-record' style = {styles.notCurrent}/>
                                <MaterialIcons name = 'fiber-manual-record' style = {styles.current}/>
                            </View>
                        </View>
                        {/* <Pressable  onPress={() => setCommentVisible(false)}>
                            <Text style = {styles.textStyleSecondaryModal}>Cancel</Text>
                        </Pressable> */}
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
                        <Pressable onPress={() => setThumbsVisible(false)}>
                            <MaterialIcons name='cancel' size={23} color={colors.light} style = {styles.exitButton}/>
                        </Pressable>
                        <Text style = {styles.thumbHeader}>Rate Your Experience</Text>
                        <View style = {styles.thumbs}>
                            <Pressable style = {styles.thumbLocation} onPress={() => {setCommentVisible(true); setThumbsVisible(false); setRating(1);}}>
                                <Image style = {styles.ThumbsUp} source = {require('../../assets/Thumbs/ThumbsUp.png')}/>
                            </Pressable>
                            <Pressable  style = {styles.dislike} onPress={() => {setCommentVisible(true); setThumbsVisible(false); setRating(0);}}>
                                <Image style = {styles.ThumbsDown} source = {require('../../assets/Thumbs/ThumbDown.png')}/>
                            </Pressable>
                        </View> 
                        <View style = {styles.footerContainer}>
                            <Text style = {styles.footerText}>1 of 2</Text>
                            <View style = {styles.periodsThumb}>
                                <MaterialIcons name = 'fiber-manual-record' style = {styles.current}/>
                                <MaterialIcons name = 'fiber-manual-record' style = {styles.notCurrent}/>
                            </View>
                        </View>
                        {/* <Pressable style = {styles.modalcancel} onPress={() => setThumbsVisible(false)}>
                            <Text style = {styles.textStyleSecondaryModal}>Cancel</Text>
                        </Pressable> */}
                    </View>
                    
                </View>
            </Modal>


            <ImageBackground style = {styles.image} source = {{uri: photo}}>  
                <View style = {styles.mask}/>
                <Ionicons onPress = {returnHome} name="chevron-back-outline" size={30} style = {styles.backArrow}/>
                <View style = {styles.headerBox}>
                    <Text style = {styles.text_Primary}>{name}</Text>
                    <Text style = {styles.text_Secondary}>{location}</Text>
                    <CustomButton text = {"Review"} type = {'SEARCH'} onPress = {buttonPressed}/>
                </View>
            </ImageBackground>

            <ScrollView style = {styles.container}>
                <View>
                    <Text style = {styles.headerText}>Featured Photos</Text>
                    <ScrollView horizontal={true} style={styles.margin}>
                        <FlatList
                            data={photo_gallary}
                            renderItem={({ item }) => <FeaturedPhotos restaurant={item} />}
                            numColumns={10}
                        />
                    </ScrollView>
                </View>
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
        fontFamily: 'GigaSansSemiBold',
        fontSize: 28
    },
    text_Secondary: {
        paddingBottom: 10,
        color: colors.primaryText,
        fontFamily: 'GigaSansSemiBold',
        fontSize: 14,
    },
    image:{
        width: '100%',
        height: 240,
    },
    headerBox: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'flex-start',
        // marginTop: '2%',
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'GigaSansSemiBold',
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
        height: '60%',
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
        height: '60%',
        width: '90%',
    },
    modalheader:{
        fontFamily: 'GigaSansSemiBold',
        paddingTop: 60,
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
       borderColor: colors.light,
       borderRadius: 4,
       width: '65%',
       height: '25%',
       padding: 10,
    },
    buttonModal:{
        borderRadius: 30,
        elevation: 2,
        backgroundColor: colors.accent,
        width: 241,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalbuttonView:{
       
        alignItems: 'center',
        paddingTop: '30%',
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
        // marginTop: '10%',
    },
    ThumbsUp:{
        height: 116.7,
        width: 135,
    },
    ThumbsDown:{
        height: 116.7,
        width: 134.8,
    },
    footerText: {

    },
    footerContainer: {
        marginLeft: '46%',
    },
    footerContainer2: {

    },
    periodsThumb: {
        flexDirection: 'row',
        marginLeft: 6,
        marginBottom: 10,
    },
    periodsComment: {
        flexDirection: 'row',
        marginLeft: 7,
        marginBottom: 10,
    },
    current: {
        color: colors.accent
    },
    notCurrent: {
        color: colors.light
    },
    exitButton: {
        marginLeft: 10,
        marginTop: 10
    },
    cancel: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    tabs: {
        marginTop: '20%',
    }
})
export default RestaurantScreen;