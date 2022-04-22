import { container } from 'aws-amplify';
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Modal, Pressable, RefreshControl, SafeAreaView, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import VerticalRestaurantBox from '../../components/VerticalRestaurantBox';
import VersusRestaurantBox from '../../components/VersusRestaurantBox';
import colors from '../../config/colors/colors';
import {useFonts} from 'expo-font';
import { getVersusData } from '../../services/requests';
import { useEffect } from 'react';
import Amplify, { Auth } from "aws-amplify";
import { postVersusData } from '../../services/postVersusData';
import {SvgUri} from 'react-native-svg';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

function VersusScreen() {

    //This is to send back to back end
    const [fullData, setFullData] = useState(null);

    // These are to give default values while the item data is loading. DO NOT DELETE
    const item = [null, 3, 35, null];
    const item2 = [null, 3, 35, null]; 

    //Data from backend stored here
    const [data, setData] = useState(item);
    const [data2, setData2] = useState(item2);

    //Determines what to display to user
    const [canUserVersus, setCanUserVersus] = useState(null);

    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    const[refreshing, setRefreshing] = useState(false);

    //User Photo
    const [userPhoto, setUserPhoto] = useState(null);

    const userId = Auth.Credentials["Auth"]["user"]["attributes"]["sub"];

    const fetchData = async () => {
        const fetchedData = await getVersusData(userId);
        setFullData(fetchedData);
        // console.log(fullData);

        if(fetchedData[0]['statusCode'] == 200){
            setCanUserVersus(true);
            setData2(fetchedData[0]['restaurants'][1]);
            setData(fetchedData[0]['restaurants'][0]);
            
            setUserPhoto(fetchedData[0]['user'].ProfilePhoto);
        } else {
            setCanUserVersus(false);
            console.log(setCanUserVersus);
        }
        
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false), fetchData());
    }, []);

    useEffect(() => {
        fetchData();
      }, []);

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


    // if(!data){
    //     return <ActivityIndicator style = {componentStyle.loading} size="large" />; 
    // }

    const onPress1 = () =>{
        setModal1Visible(true);
    }
    const onPress2 = () =>{
        setModal2Visible(true);
    }

    if(!data){
        return <ActivityIndicator style = {componentStyle.loading} size="large" />; 
    }

    if(canUserVersus){

// <<<<<<< HEAD
//         const item2 = [data2['name'], 3, 35, data2['photo']];
//         const item = [data['name'], null, null, data['photo']]; 

//         // const item = [null, 3, 35, null];
//         // const item2 = [null, 3, 35, null];

//         return (
//             <View style={containerStyles.container}>
//             {/* Slanted Accent Color */}
//                 <View style={containerStyles.topBox}>

//                 </View>
//             {/* Header */}
//                 <View style={containerStyles.headerContainer}>
//                     {/* <View style={containerStyles.headerTextContainer}> */}
//                         <Text style={textStyle.text}>{`Which was better?`}</Text>
//                         <Text style={textStyle.textSmall}>Tap One</Text>
//                     {/* </View> */}
//                 </View>
//             {/* Profile Image */}
//                 <View style={containerStyles.profileImageContainer}>
//                     <SvgUri style = {componentStyle.topImage} uri={userPhoto}/>
//                 </View>
//             {/* Versus */}
//                 <View style={containerStyles.versusContainer}>
//                     {/* <Text style={textStyle.versusText}>Which was better?</Text>
//                     <Text style={textStyle.versusTextSmall}>This decision will impact their rank.</Text> */}
//                     <View style={containerStyles.versusRestaurantContainer}>
//                         <VersusRestaurantBox restaurant={item} fullData = {fullData} restaurantNum={1}/>
//                         <VersusRestaurantBox restaurant={item2} fullData = {fullData} restaurantNum={0}/>
//                         {/* <VerticalRestaurantBox restaurant={item} type={'LARGE'}/>
//                         <VerticalRestaurantBox restaurant={item} type={'LARGE'}/> */}
//                     </View>

    const item2 = [data2['name'], 3, 35, data2['photo'], fullData, 0];
    const item = [data['name'], null, null, data['photo'], fullData, 1]; 

    return (
        <View style={containerStyles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        <Modal
            animationType='slide'
            transparent={true}
            visible={modal1Visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal1Visible(!modal1Visible);
        }}>
            <View style = {containerStyles.modalContainer}>
                    <ImageBackground source={{uri:data['photo']}} style ={containerStyles.modalImage}>
                        <View style = {containerStyles.modalShadow}>
                            <Text style = {textStyle.restaurantText}>{data['name']}</Text>
                            <Text style = {containerStyles.modalText}>WINNER</Text>
                            <View style = {containerStyles.cancel}>
                                <Pressable onPress={() => setModal1Visible(false)}>
                                    <Text style = {{color: colors.light, }}>DISMISS</Text>
                                </Pressable>
                            </View>                            
                        </View>
                    </ImageBackground>    
            </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal2Visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal2Visible(!modal2Visible);
        }}>
             <View style = {containerStyles.modalContainer}>
             <ImageBackground source={{uri:data2['photo']}} style ={containerStyles.modalImage}>
                        <View style = {containerStyles.modalShadow}>
                            <Text style = {textStyle.restaurantText}>{data2['name']}</Text>
                            <Text style = {containerStyles.modalText}>WINNER</Text>
                            <View style = {containerStyles.cancel}>
                                <Pressable onPress={() => setModal2Visible(false)}>
                                    <Text style = {{color: colors.light, }}>DISMISS</Text>
                                </Pressable>
                            </View>                            
                        </View>
                    </ImageBackground>  
                
        </View>
        </Modal>
        {/* Slanted Accent Color */}
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

                <View style={containerStyles.topBox}>

                </View>
            {/* Header */}
                <View style={containerStyles.headerContainer}>
                    {/* <View style={containerStyles.headerTextContainer}> */}
                        <Text style={textStyle.text}>{`Which was better?`}</Text>
                        <Text style={textStyle.textSmall}>Tap One</Text>
                    {/* </View> */}
                </View>
            {/* Profile Image */}
                <View style={containerStyles.profileImageContainer}>
                    <SvgUri style = {componentStyle.topImage} uri={userPhoto}/>
                </View>
            {/* Versus */}
                <View style={containerStyles.versusContainer}>
                    {/* <Text style={textStyle.versusText}>Which was better?</Text>
                    <Text style={textStyle.versusTextSmall}>This decision will impact their rank.</Text> */}
                    <View style={containerStyles.versusRestaurantContainer}>
                        <TouchableOpacity  onPress={() =>{onPress1();}}>
                            <VersusRestaurantBox restaurant={item}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{onPress2();}}>
                            <VersusRestaurantBox restaurant={item2}/>
                        </TouchableOpacity>
                        
                        {/* <VerticalRestaurantBox restaurant={item} type={'LARGE'}/>
                        <VerticalRestaurantBox restaurant={item} type={'LARGE'}/> */}
    {/* >>>>>>> 7c97b377834c7bcd5c3d8dd1140136a8b5784606 */}
                    </View>
                </View>
        </ScrollView>
        </View>
        );
    } else {
        return (
            <ScrollView style={containerStyles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View style={containerStyles.headerContainer}>
                     <View style={containerStyles.headerTextContainer}>
                         <Text style={textStyle.versusText}>Go Rank</Text>
                         <Text style={textStyle.versusText}>More Restaurants</Text>
                     </View>
                 </View>
            </ScrollView>
            
        );
    }
}

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    modalContainer:{
        flex: 1,
        backgroundColor: colors.accent,
        
    },
    modalShadow:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage:{
        flex: 1,
        
        
    },
    safeView:{
        height: '8%'
    },
    modalView:{
        backgroundColor: colors.background,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'space-evenly',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '60%',
        width: '90%',
    },
    modalText:{
        color: colors.accent,
        fontSize: 90,
        fontStyle: 'italic',
        fontWeight: '700',
        
    },
    cancel: {
        position: 'absolute',
        bottom: 50,

    },
    topBox: {
        position: 'absolute',
        height: 600,
        width: 600,
        backgroundColor: colors.accent,
        transform: [{skewY: '-20deg'}, {translateX: -100}, {translateY: -425}], 
    },
    headerContainer: {
        // backgroundColor: colors.accent,
    },
    headerTextContainer: {
        marginTop: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageContainer: {
        marginLeft: '6%',
        marginRight: '6%',
        marginBottom: '10%',
        alignItems: 'center',
    },
    versusContainer: {
        flex: 1,
        maxHeight: '100%',
        // marginTop: '45%',
    },

    versusRestaurantContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
        
})

    const componentStyle = StyleSheet.create({
        topImage: {
            height: 104,
            width: 104,
            borderRadius: 1000,
            marginTop: '0%',
        },

        loading: {
            flex: 1,
            justifyContent: 'center',
          },
    })

    const textStyle = StyleSheet.create({
        text: {
            color: colors.background,
            textAlign: 'center',
            textAlignVertical: 'bottom',
            fontSize: 30,
            fontFamily: 'GigaSansSemiBold',
            marginTop: '15%',
            marginBottom: '0%',

        },

        textSmall: {
            color: colors.background,
            textAlign: 'center',
            fontSize: 18,
            marginBottom: '10%',
            fontFamily: 'GigaSansReg',
        },

        versusText: {
            color: colors.accent,
            textAlign: 'center',
            fontSize: 35,
            fontFamily: 'CeraBold',
        },

        versusTextSmall: {
            color: colors.accent,
            textAlign: 'center',
            fontSize: 16,
            marginTop: '0%',
        },
        restaurantText:{
            color: colors.light,
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic'
        },
    });


export default VersusScreen;
