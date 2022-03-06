import React from 'react';
import {ScrollView, View, Text, StyleSheet, Alert} from 'react-native';
import HorizontalProfileBox from '../../components/HorizontalProfileBox/HorizontalProfileBox';
import Amplify, {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';


function ProfileScreen(props) {
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

    return (
        <ScrollView style = {styles.container}>
            <Text>Profile</Text>
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
        margin: 9
    },
    horizontalBox: {
        
    }
})

export default ProfileScreen;