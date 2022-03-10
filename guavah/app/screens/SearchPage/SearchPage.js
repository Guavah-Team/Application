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
import HorizontalRestaurantPage from "../../components/HorizontalRestaurantBox/HorizontalRestaurantPage";
Amplify.configure(config)

function SearchPage(props) {
    const [value, setValue] = useState()
    
    function updateSearch(value){
        // Search logic goes HERE
        console.log(value)
    }

    return (
        //FIXME
        //Scroll View causes background to not be one color

        // <ScrollView>
            <View style={styles.container}> 
                <View style={styles.searchContainer}>
                    <Text style={styles.text}>search</Text>
                        <CustomSearch
                            value={value}
                            updateSearch={updateSearch}
                        ></CustomSearch>
                </View>
                <ScrollView style={styles.scroller}>
                    <View style={styles.resultsContainer}>
                        {/* FIXME */}
                        {/* Using text to space these is AWFUL*/}
                        {/* How do we show the amount of restaurant page items based on search results? */}
                        {/* <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage>
                        <Text></Text>
                        <HorizontalRestaurantPage style={styles.resultItem}></HorizontalRestaurantPage> */}
                    </View>
                </ScrollView>
            </View>
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    searchContainer: {
        // backgroundColor: colors.accent,
    },
    text: {
        color: colors.accent,
        // color: colors.background,
        textAlign: 'center',
        fontSize: 30,

        ...Platform.select({
            android: {
                marginTop: '10%',
            },
        })
    },

    resultsContainer: {
        margin: '2%',
    },
    resultItem: {
        justifyContent: 'space-between',
        padding: '10',
    },
    scroller: {
        
    },

    invisText: {
        color: colors.background,
    },
})

export default SearchPage;