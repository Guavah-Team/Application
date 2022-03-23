import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

function UserSettingsScreen(){
    return (
        <View>
            <Text>UserSettingsScreen</Text>
        </View>
    );
}

export default UserSettingsScreen;