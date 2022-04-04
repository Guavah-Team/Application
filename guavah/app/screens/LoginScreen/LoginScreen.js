import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Alert, TextInput} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import Amplify, {Auth} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';
import { useFonts } from 'expo-font';
import config from '../../../src/aws-exports';

Amplify.configure(config);

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function LoginScreen(props) {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

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

    const{
        control, 
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSignInPressed = async data => {
        if(loading){
            return;
        }

        setLoading(true);
        try{
            const response = await Auth.signIn(data.username, data.password);
            // CURRENT AT
            console.log(response);
        } catch (e){
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUpScreen');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <ScrollView style = {styles.scroll}>
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
                        name = 'password'
                        placeholder={'Password'}
                        control = {control}
                        secureTextEntry
                        rules = {{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password should be 8 characters long',
                            }
                        }}
                    />

                    {/* <Text>Cory a hoe</Text> */}

                    <CustomButton 
                        text = {"Forgot Password"}
                        onPress = {onForgotPasswordPressed}
                        type = {'TERTIARY'}
                    />
                </View>

                {/* <SocialSignInButtons/> */}
                <View style = {styles.footerContainer}>
                    <CustomButton 
                        text = {loading ? "Loading..." : "Sign In"} 
                        onPress = {handleSubmit(onSignInPressed)}
                    />

                    <CustomButton 
                        text = {"Don't have an account? Sign up."}
                        onPress = {onSignUpPressed}
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
        marginTop: '15%',

    },
    inputContainer: {
        flex: 1,
        marginTop: '60%',
        width: '100%',
    },
    footerContainer: {
        width: '100%',
        marginTop: '45%',

    }
})

export default LoginScreen;