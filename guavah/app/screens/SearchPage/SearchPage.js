import React, {useEffect, useState} from "react";
import { StyleSheet, View, FlatList, Text, ScrollView, ActivityIndicator, RefreshControl, Alert, TextInput } from "react-native";
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import Amplify, {Auth} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons'; 

import { getDetailedRestaurantData, getSearchRestaurantData } from "../../services/requests";

import config from '../../../src/aws-exports';
import CustomSearch from "../../components/CustomSearch";
import HorizontalRestaurantPage from "../../components/HorizontalRestaurantBox/HorizontalRestaurantPage";
Amplify.configure(config)

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

function SearchPage(props) {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState();
    const [dataA, setDataA] = useState(null);
    const [messageA, setMessageA] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [pressed, setPressed] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const navigation = useNavigation();
    
    function updateSearch(value){
        setValue(value);
    }

    const onSearchPressed = async () => {
        setPressed(true);
        const fetchedData = await getSearchRestaurantData(value);
        setSearchData(fetchedData[0]);
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false), setPressed(false));
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const fetchedData = await getDetailedRestaurantData();
        setMessageA(fetchedData[0]);
        setDataA(fetchedData[1]);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading || !dataA || !messageA) {
        return <ActivityIndicator style = {styles.loading} size="large" />; 
    }

    return (
        <View style={styles.container}> 
            <View style={styles.searchContainer}>
                <View style = {styles.searchBox}>
                    <Text style={styles.text}>search</Text>
                    <CustomSearch
                        value={value}
                        updateSearch={updateSearch}
                        onPress={onSearchPressed}
                    ></CustomSearch>
                </View>
            </View>
            <View style = {styles.resultsHeader}>
                <Text style={styles.localText}>
                    {pressed ? 'Results' : messageA}
                </Text>
                <Ionicons name="chevron-down-outline" style = {styles.downArrow}></Ionicons>
            </View>
            <ScrollView style={styles.scroller} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View style={styles.resultsContainer}>
                    <View style={styles.horizontal}>
                        {pressed ? <FlatList
                        data={searchData}
                        renderItem={({ item }) => <HorizontalRestaurantPage restaurant={item} />}
                        /> : <FlatList
                        data={dataA}
                        renderItem={({ item }) => <HorizontalRestaurantPage restaurant={item} />}
                        />}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    searchContainer: {
        backgroundColor: colors.accent,
        width: '100%',
        height: 100,
    },
    text: {
        color: colors.background,
        textAlign: 'center',
        fontSize: 18,

        ...Platform.select({
            android: {
                marginTop: '10%',
            },
        })
    },
    resultItem: {
        justifyContent: 'space-between',
        padding: '10',
    },
    invisText: {
        color: colors.background,
    },
    searchBox: {
        marginTop: '8%',
        marginLeft: 10,
        marginRight: 10,
    },
    horizontal: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    localText: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 15,
        marginTop: 40,
        marginBottom: 10,
    },
    resultsHeader: {
        flexDirection: 'row',
    },
    downArrow: {
        fontSize: 25,
        marginTop: 38,
        marginBottom: 10,
        alignSelf: 'flex-end',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default SearchPage;