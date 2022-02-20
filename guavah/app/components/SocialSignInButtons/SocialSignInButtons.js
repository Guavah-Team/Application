import React from 'react';
import {View} from 'react-native';
import CustomButton from '../CustomButton';

function SocialSignInButtons(props) {
    const onSignInFacebook = () => {
        console.warn("Facebook");
    }
    const onSignInApple = () => {
        console.warn("Apple");
    }
    const onSignInGoogle = () => {
        console.warn("Google");
    }
    return (
        <>
            <CustomButton 
                    text = {"Sign In with Facebook"}
                    onPress = {onSignInFacebook}
                    bgColor = {'#E7EAF4'}
                    fgColor = {'#4765A9'}
                />

                <CustomButton 
                    text = {"Sign In with Google"} 
                    onPress = {onSignInGoogle}
                    bgColor = {'#FAE9EA'}
                    fgColor = {'#DD4D44'}
                />

                <CustomButton 
                    text = {"Sign In ith Apple"}
                    onPress = {onSignInApple}
                    bgColor = {'#e3e3e3'}
                    fgColor = {'#363636'}
                />
        </>
    );
}

export default SocialSignInButtons;