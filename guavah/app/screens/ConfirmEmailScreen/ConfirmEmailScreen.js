import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller, set} from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function ConfirmEmailScreen(props) {
    const [loading, setLoading] = useState(false);
    const route = useRoute();

    const{
        control, 
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm({defaultValues: {username: route?.params?.username}});

    const username = watch('username');

    const navigation = useNavigation();

    const onConfirmPressed = async (data) => {
        if(loading){
            return;
        }
        setLoading(true);
        try {
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate('LoginScreen');
        } catch (e) {
            Alert.alert(e.message);
        }
        setLoading(false);
    };

    const onSignInPressed = () => {
        navigation.navigate('LoginScreen');
    };

    const onResendPressed = async() => {
        if(loading){
            return;
        }
        setLoading(true);
        try {
            await Auth.resendSignUp(username);
            Alert.alert('Code was resent to your email')
        } catch (e) {
            Alert.alert(e.message);
        }
        setLoading(false);
    };

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style = {styles.root}>
                <Wordmark/>
                <View style = {styles.inputContainer}>
                    <CustomInput
                        name = "username"
                        placeholder = "Email"
                        control={control}
                        rules = {{
                            required: 'Email is required',
                            pattern: {
                                value: EMAIL_REGEX,
                                message: 'Email is invalid',
                            }
                        }}
                    />
                    <CustomInput
                        name = "code"
                        placeholder = "Enter your confirmation code"
                        control = {control}
                        rules = {{
                            required: "Confirmation code required"
                        }}
                    />
                </View>
                <View style = {styles.footer}>
                    <CustomButton text = {loading ? "Loading..." : "Confirm"} onPress = {handleSubmit(onConfirmPressed)}/>

                    <CustomButton 
                        text = {"Resend code"}
                        onPress = {onResendPressed}
                        type = {'SECONDARY'}
                    />
                    <CustomButton 
                        text = {"Back to Sign in"}
                        onPress = {onSignInPressed}
                        type = {'TERTIARY'}
                    />

                </View>
                
            </View>
        </ScrollView>





    );
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        padding: 33,
        alignItems: 'center',
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
    inputContainer: {
        width: '100%',
        top: 190,
    },
    footer: {
        top: 300,
        width: '100%',
    }


})

export default ConfirmEmailScreen;