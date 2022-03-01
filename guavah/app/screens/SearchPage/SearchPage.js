import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView, Alert, TextInput } from "react-native";
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import Amplify, {Auth} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';

import config from '../../../src/aws-exports';
import CustomSearch from "../../components/CustomSearch";
Amplify.configure(config)

function SearchPage(props) {
    const [value, setValue] = useState()
    
    function updateSearch(value){
        // Search logic goes HERE
        console.log(value)
    }

    return (
        <ScrollView>
            <CustomSearch
                value={value}
                updateSearch={updateSearch}
            ></CustomSearch>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default SearchPage;