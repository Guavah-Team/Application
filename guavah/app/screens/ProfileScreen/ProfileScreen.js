import React from 'react';
import {ScrollView, View, Text, StyleSheet, Alert, ImageBackground, Image} from 'react-native';
import HorizontalProfileBox from '../../components/HorizontalProfileBox/HorizontalProfileBox';
import Amplify, {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import colors from '../../config/colors/colors';
import {useFonts} from 'expo-font';


function ProfileScreen(props) {

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

    const navigation = useNavigation();

    const test = () => {
        Alert.alert("HOE")
    }

    const logout = () => {
        Auth.signOut();
    }

    const onSettingsPressed = () => {
        navigation.navigate('SettingsScreen')
    }
    const onHistoryPressed = () => {
        navigation.navigate('HistoryScreen');
    }

    console.log(Auth.Credentials)

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.topBox}>
            
            </View>
            <View style = {styles.userBox}>
                <Image style = {styles.topImage} source = {require('../../assets/icon.png')}/>
                <Text style = {styles.userName}>dylan guzman</Text>
                <Text style = {styles.userLevel}>Level 4</Text>
            </View>

            <View style = {styles.horizontalBox}>
                <HorizontalProfileBox onPress={onSettingsPressed} iconName = {'settings'} name = {'Profile Settings'} description = {'Adjust your profile information'}/>
                <HorizontalProfileBox onPress={onHistoryPressed} iconName = {'history'} name = {'History'} description = {'View your recent activity'}/>
                <HorizontalProfileBox onPress={logout} iconName = {'logout'} name = {'Logout'} description = {'Log out of your account'}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontalBox: {
        margin: 9,
        // marginTop: '%',
        marginTop: '13%'

        
    },
    topImage: {
        height: 132,
        width: 132,
        borderRadius: 1000
    },
    userBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%'
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    userLevel: {
        fontSize: 14,
        fontWeight: '400',
    },
    topBox: {
        position: 'absolute',
        height: 400,
        width: 600,
        backgroundColor: colors.accent,
        transform: [{skewY: '-30deg'}, {translateX: -100}, {translateY: -225}],
    }
})

export default ProfileScreen;