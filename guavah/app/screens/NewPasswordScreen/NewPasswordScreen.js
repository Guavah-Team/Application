import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function NewPasswordScreen(props) {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const route = useRoute();

    const{
        control, 
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm({defaultValues: {username: route?.params?.username},});

    const onSubmitPressed = async (data) => {
        if(loading){
            return;
        }
        setLoading(true);
        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            navigation.navigate('LoginScreen');
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
                    <CustomInput
                        name = "code"
                        placeholder = "Code"
                        control={control}
                        rules = {{
                            required: 'Code required'
                        }}
                    />
                    <CustomInput
                        name = "password"
                        placeholder = "Enter new password"
                        control={control}
                        secureTextEntry
                        rules = {{
                            required: 'New password required',
                            minLength: {
                                value: 8,
                                message: 'Username should be at least 8 characters long',
                            },
                        }}
                    />
                </View>
                <View style = {styles.footerContainer}>
                    <CustomButton text = {"Submit"} onPress = {handleSubmit(onSubmitPressed)}/>

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
        // top: 150,
        marginTop: '55%',
        width: '100%',
    },
    footerContainer: {
        width: '100%',
        marginTop: '45%',
        // top: 300
    }
})

export default NewPasswordScreen;