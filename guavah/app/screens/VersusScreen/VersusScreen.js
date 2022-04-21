import { container } from 'aws-amplify';
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
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

function VersusScreen() {

    const item = [null, 3, 35, null];
    const item2 = [null, 3, 35, null]; 

    const [data, setData] = useState(item);
    const [data2, setData2] = useState(item2);

    const [canUserVersus, setCanUserVersus] = useState(null);

    const [userPhoto, setUserPhoto] = useState(null);

    const userId = Auth.Credentials["Auth"]["user"]["attributes"]["sub"];

    const fetchData = async () => {
        const fetchedData = await getVersusData(userId);
        console.log(fetchedData[0]['statusCode']);
        console.log(fetchedData[0]['restaurants'][0]['name']);

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

    if(canUserVersus){

        const item2 = [data2['name'], 3, 35, data2['photo']];
        const item = [data['name'], null, null, data['photo']]; 

        // const item = [null, 3, 35, null];
        // const item2 = [null, 3, 35, null];

        return (
            <View style={containerStyles.container}>
            {/* Slanted Accent Color */}
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
                        <VersusRestaurantBox restaurant={item}/>
                        <VersusRestaurantBox restaurant={item2}/>
                        {/* <VerticalRestaurantBox restaurant={item} type={'LARGE'}/>
                        <VerticalRestaurantBox restaurant={item} type={'LARGE'}/> */}
                    </View>
                </View>
            </View>
            
        );
    } else {
        return (
            <View style={containerStyles.container}>
                <View style={containerStyles.headerContainer}>
                     <View style={containerStyles.headerTextContainer}>
                         <Text style={textStyle.versusText}>{`Go Rank more restaurants`}</Text>
                         <Text style={textStyle.textSmall}>Tap One</Text>
                     </View>
                 </View>
            </View>
            
        );
    }
}

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topBox: {
        position: 'absolute',
        height: 400,
        width: 600,
        backgroundColor: colors.accent,
        transform: [{skewY: '-20deg'}, {translateX: -100}, {translateY: -225}], 
    },
    headerContainer: {
        // backgroundColor: colors.accent,
    },
    headerTextContainer: {
        marginTop: '10%',
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
            fontSize: 30,
            marginTop: '40%',
        },

        versusTextSmall: {
            color: colors.accent,
            textAlign: 'center',
            fontSize: 16,
            marginTop: '0%',
        },
    });


export default VersusScreen;
