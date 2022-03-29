import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

function SettingsScreen(props) {
    const navigation = useNavigation();

    const returnHome = () => {
        navigation.navigate('HomeScreen');
    }
    return (
        <View style = {styles.container}>
            <Text>Settings</Text>
            <Ionicons onPress = {returnHome} style = {styles.icon} name = {'arrow-back-outline'} size = {48}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default SettingsScreen;