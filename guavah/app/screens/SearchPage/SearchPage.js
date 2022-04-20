import React, {useEffect, useState} from "react";
import { StyleSheet, View, FlatList, Text, ScrollView, ActivityIndicator, Button, Keyboard, Pressable, RefreshControl, Alert, TextInput } from "react-native";
import colors from '../../config/colors/colors';
import Wordmark from '../../components/Wordmark/Wordmark';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import Amplify, {Auth} from 'aws-amplify';
import {useForm, Controller, set} from 'react-hook-form';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons'; 
import * as Location from 'expo-location';

import { getDetailedRestaurantData, getOpeningSearchRestaurantData, getSearchRestaurantData, getUserData } from "../../services/requests";

import config from '../../../src/aws-exports';
import CustomSearch from "../../components/CustomSearch";
import HorizontalRestaurantPage from "../../components/HorizontalRestaurantBox/HorizontalRestaurantPage";
import { useFonts } from 'expo-font';
Amplify.configure(config)

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

function SearchPage() {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        (async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        })();

    }, []);

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


    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState();
    const [data, setData] = useState(null);
    const [messageA, setMessageA] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [pressed, setPressed] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    const[userRadius, setUserRadius] = useState("");

    const [oneDollar, setOneDollar] = useState(true);
    const [oneColor, setOneColor] = useState(colors.accent);
    const [twoDollar, setTwoDollar] = useState(false);
    const [twoColor, setTwoColor] = useState("");
    const [threeDollar, setThreeDollar] = useState(false);
    const [threeColor, setThreeColor] = useState("");

    const navigation = useNavigation();
    
    function updateSearch(value){
        setValue(value);
    }

    const onOnePressed = async () => {
        setOneDollar(true);
        setTwoDollar(false);
        setThreeDollar(false);
        setOneColor(colors.accent);
        setTwoColor("");
        setThreeColor("");
        const fetchedData = await getOpeningSearchRestaurantData(1, {latitude, longitude, userRadius});
        setData(fetchedData[0]);
    }
    const onTwoPressed = async () => {
        setTwoDollar(true);
        setOneDollar(false);
        setThreeDollar(false);
        setTwoColor(colors.accent);
        setOneColor("");
        setThreeColor("");
        const fetchedData = await getOpeningSearchRestaurantData(2, {latitude, longitude, userRadius});
        setData(fetchedData[0]);
    }
    const onThreePressed = async () => {
        setThreeDollar(true);
        setOneDollar(false);
        setTwoDollar(false);
        setThreeColor(colors.accent);
        setOneColor('');
        setTwoColor('');
        const fetchedData = await getOpeningSearchRestaurantData(3, {latitude, longitude, userRadius});
        setData(fetchedData[0]);
    }

    const userId = Auth.Credentials["Auth"]["user"]["attributes"]["sub"];

    const fetchUserData = async () => {
        const fetchedUserData = await getUserData(userId)
        setUserRadius(fetchedUserData[3]);
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    const onSearchPressed = async (data) => {
        // console.log(data);
        setPressed(true);

        if(threeDollar){
            const fetchedData = await getSearchRestaurantData(data, 3, {latitude, longitude, userRadius});
            setSearchData(fetchedData[0]);
        }else if(twoDollar){
            const fetchedData = await getSearchRestaurantData(data, 2, {latitude, longitude, userRadius});
            setSearchData(fetchedData[0]);
        }else{
            const fetchedData = await getSearchRestaurantData(data, 1, {latitude, longitude, userRadius});
            setSearchData(fetchedData[0]);
        }
    }


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false), setPressed(false));
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const fetchedData = await getOpeningSearchRestaurantData(1, {latitude, longitude, userRadius});
        setData(fetchedData[0]);
        setLoading(false);
    };

    // useEffect(() => {
    //     if(latitude != null && longitude != null && userRadius != null){
    //         fetchData();
    //     }
    // }, [latitude, longitude, userRadius]);

    // if (loading || !data) {
    //     return <ActivityIndicator style = {styles.loading} size="large" />; 
    // }

    return (
        <View style={styles.container}> 
            <View style={styles.searchContainer}>
                <View style = {styles.searchBox}>
                    <View style={styles.innerContainer}>
                        <View
                            style={
                            clicked
                                ? styles.searchBar__clicked
                                : styles.searchBar__unclicked
                            }
                        >
                            {/* search Icon */}
                            <Feather
                            name="search"
                            size={20}
                            color="black"
                            style={{ marginLeft: 1 }}
                            />
                            {/* Input field */}
                            <TextInput
                            style={styles.input}
                            placeholder="Search"
                            value={searchPhrase}
                            onChangeText={setSearchPhrase}
                            onFocus={() => {
                                setClicked(true)
                            }}
                            onSubmitEditing = {() => {
                                // console.log(searchPhrase)
                                onSearchPressed(searchPhrase);
                            }}
                            />
                            {/* cross Icon, depending on whether the search bar is clicked or not */}
                            {clicked && (
                            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                                setSearchPhrase("")
                            }}/>
                            )}
                        </View>
                        {/* cancel button, depending on whether the search bar is clicked or not */}
                        {clicked && (
                            <View>
                            <Button
                                title="Cancel"
                                color={'white'}
                                onPress={() => {
                                Keyboard.dismiss();
                                setClicked(false);
                                setPressed(false);
                                setSearchPhrase("");
                                }}
                                style = {styles.cancel}
                            ></Button>
                            </View>
                        )}
                        </View>
                </View>
            </View>
            <View style = {styles.dollarButtons}>
                <CustomButton 
                    text = {"$"}
                    type = {'SEARCHBOX'}
                    onPress = {onOnePressed}
                    bgColor = {oneColor}
                />
                <CustomButton 
                    text = {"$$"}
                    type = {'SEARCHBOX'}
                    onPress = {onTwoPressed}
                    bgColor = {twoColor}
                />
                <CustomButton 
                    text = {"$$$"}
                    type = {'SEARCHBOX'}
                    onPress = {onThreePressed}
                    bgColor = {threeColor}
                />
            </View>
            <View style = {styles.resultsHeader}>
                <Text style={styles.localText}>
                    {pressed ? 'Results' : 'Local Restaurants'}
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
                        data={data}
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
        fontFamily: 'GigaSansSemiBold',
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
        // marginLeft: 10,
        // marginRight: 10,
    },
    horizontal: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    localText: {
        fontSize: 18,
        fontFamily: 'GigaSansSemiBold',
        marginLeft: 15,
        marginTop: 10,
        // marginTop: 20,
        marginBottom: 10,
    },
    resultsHeader: {
        flexDirection: 'row',
        ...Platform.select({
            android: {
                marginTop: '10%',
            },
        })
        
    },
    downArrow: {
        fontSize: 25,
        // marginTop: 20,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'flex-end',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 48,
      },
    searchContainerNew: {
        borderRadius: 4,
        backgroundColor: colors.background,
        flexDirection: 'row'
    },
    searchBar__unclicked: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 35,
        flexDirection: "row",
        width: "100%",
        backgroundColor: colors.background,
        borderRadius: 4,
        alignItems: "center",
      },
      searchBar__clicked: {
        paddingLeft: 15,
        paddingRight: 10,
        height: 35,
        flexDirection: "row",
        width: "83%",
        backgroundColor: colors.background,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      innerContainer: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "93%",
        
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
      cancel: {
        color: colors.accent
      },
      dollarButtons: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
          marginRight: 10,
          marginTop: '3%',
      }
})

export default SearchPage;