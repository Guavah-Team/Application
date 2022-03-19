import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function SignUpScreen(props) {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const{
        value,
        control, 
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm();

    const password = watch('password');

    const onRegisterPressed = async (data) => {
        if(loading){
            return;
        }

        setLoading(true);
        const {username, password, name} = data;
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {name},
            })
            navigation.navigate('ConfirmEmailScreen', {username});
        } catch (e) {
            Alert.alert(e.message);
        }
        setLoading(false);
    };

    const onSignInPressed = () => {
        navigation.navigate('LoginScreen');
    }

    const onTermsPressed = () => {

    }

    const onPrivacyPressed = () => {

    }

    return (
        <ScrollView>
            <View style = {styles.root}>
                <Wordmark/>
                <View style = {styles.inputContainer}>
                    <CustomInput
                        name = "name"
                        placeholder = "Name"
                        control={control}
                        rules = {{
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name should be at least 3 characters long',
                            },
                            maxLength: {
                                value: 24,
                                message: 'Name should be max 24 characters long',
                            },
                        }}
                    />
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
                        name = "password"
                        placeholder = {"Password"} 
                        control={control}
                        secureTextEntry
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Username should be at least 8 characters long',
                            },
                        }}
                    />
                    <CustomInput 
                        name = "password-repeat"
                        placeholder = {"Repeat Password"} 
                        control={control}
                        secureTextEntry
                        rules={{
                            required: 'Re-Enter Password',
                            validate: value => value == password || "Passwords do not match",
                        }}
                    />
                    <View style = {styles.footer}>
                        <CustomButton text = {loading ? "Loading..." : "Register"} onPress = {handleSubmit(onRegisterPressed)}/>
                        
                        <Text style = {styles.text}>
                            By registering confirm that you accept our{' '} 
                            <Text style = {styles.link} onPress = {onTermsPressed}>Terms of Use</Text> and{' '} 
                            <Text style = {styles.link} onPress = {onPrivacyPressed}>Privacy Policy</Text>
                        </Text>
                        
                        {/* <SocialSignInButtons/> */}
                        <CustomButton 
                            text = {"Have an account? Sign in."}
                            onPress = {onSignInPressed}
                            type = {'TERTIARY'}
                        />
                    </View>
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
        marginTop: '15%',
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
        marginTop: '30%',
    },
    footer: {
        marginTop: '30%',
    }
})

export default SignUpScreen;