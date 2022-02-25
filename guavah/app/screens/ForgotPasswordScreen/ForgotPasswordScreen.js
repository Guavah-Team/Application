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

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function ForgotPasswordScreen(props) {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const{
        control, 
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSendPressed = async (data) => {
        const{username} = data;

        if(loading){
            return;
        }
        setLoading(true);
        try {
            await Auth.forgotPassword(data.username);
            navigation.navigate('NewPasswordScreen', {username});
        } catch (e) {
            Alert.alert(e.message);
        }
        setLoading(false);
    };

    const onSignInPressed = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <ScrollView>
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
                </View>
                <View style = {styles.footerContainer}>
                    <CustomButton text = {loading ? "Loading..." : "Send"} onPress = {handleSubmit(onSendPressed)}/>

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
        // top: 250,
        marginTop: '80%',
        width: '100%',
    },
    footerContainer: {
        width: '100%',
        marginTop: '70%',
        // top: 450
    }
})

export default ForgotPasswordScreen;