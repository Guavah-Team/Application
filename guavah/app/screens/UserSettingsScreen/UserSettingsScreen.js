import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image, Alert, Pressable, SafeAreaView, TextInput, Switch} from 'react-native';
import colors from '../../config/colors/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import Slider from '@react-native-community/slider';
import {Ionicons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { getUserDataSettings } from '../../services/requests';
import { postSettingsData } from '../../services/post';
import {SvgUri} from 'react-native-svg';

const EMAIL_REGEX = /^[a-zA-Z0-9.!$#%&-]+@[a-zA-Z0-9]+\.[a-z]{2,3}/

function UserSettingsScreen(){

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [radius, setRadius] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [darkTheme, setDarkTheme] = useState(null);
    const [vegan, setVegan] = useState(null);

    const toggleDarkSwitch = () => {
        if(darkTheme === 1){
            setDarkTheme(0);
        }else{
            setDarkTheme(1);
        }
    }

    const toggleVeganSwitch = () => {
        if(vegan === 1){
            setVegan(0);
        }else{
            setVegan(1);
        }
    }
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

    const userId = Auth.Credentials["Auth"]["user"]["attributes"]["sub"];

    const fetchUserData = async () => {
        const fetchedUserData = await getUserDataSettings(userId);
        setName(fetchedUserData[0]);
        setEmail(fetchedUserData[1]);
        setProfilePhoto(fetchedUserData[2]);
        setRadius(fetchedUserData[3] * .000621371);
        // console.log(fetchedUserData[3])
        setVegan(fetchedUserData[4]);
        setDarkTheme(fetchedUserData[5]);
        // console.log(fetchedUserData[5])
    }

    useEffect(() =>{
        fetchUserData();
    }, [])

    const navigation = useNavigation();

    const onPressPost = async() =>{
        postSettingsData(userId, name, darkTheme, vegan, Math.ceil(radius));
        navigation.navigate('HomeScreen');
    }
    
    const returnHome = () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <View style = {styles.container}>

            {/* Header */}
            <View style = {styles.header}>
                <SafeAreaView>
                    <Text style = {styles.textStyleHeader}>settings</Text>
                </SafeAreaView>
                <Pressable style = {styles.backButton} >
                    <Ionicons onPress = {returnHome} name="chevron-back-outline" size={30} style = {styles.backArrow}/>
                </Pressable>
            </View>

            {/* Profile Box */}
            <View style = {styles.border}>

                <Text style = {styles.sections}>Profile</Text>
                <View style = {styles.profileSettingsBox}>
                    <SvgUri style = {styles.profilePic} uri={profilePhoto}/>

                    <View>
                        <Text style = {styles.profileText}>Name</Text>
                        <TextInput  
                            style = {styles.input}
                            placeholder = {name}
                            placeholderTextColor = 'black'
                            onChangeText = {newName => setName(newName)}
                            defaultValue = {name}
                        />
                        <Text style = {styles.profileText}>Email</Text>
                        <TextInput 
                            style = {styles.input}
                            value = {email}
                            //placeholder = {email}
                            placeholderTextColor = 'black'
                            //onChangeText = {newEmail => setEmail(newEmail)}
                            defaultValue = {email}
                            />
                    </View>
                </View>

                {/* Location Box */}
                <Text style = {styles.sections}>Location</Text>
                    <View style = {styles.settingsBox}>
                        <View style = {styles.locations}>
                            <View style = {styles.locationView}><Image style = {styles.location} source={require('../../assets/userSettingsIcons/location.png')}/></View>
                            <Text style = {styles.textFonts}>Search Radius</Text>
                            <View  style = {styles.switch}><Text style = {styles.textFonts}>{Math.ceil(radius)} Miles</Text></View>
                        </View>
                        
                        <Slider
                            style={{width: '90%', height: 40, alignSelf: 'center', flex: .1}}
                            minimumValue={0}
                            maximumValue={10}
                            value = {radius}
                            thumbTintColor= {colors.accent}
                            minimumTrackTintColor={colors.accent}
                            maximumTrackTintColor= "#1b1b1b"
                            onValueChange={value => setRadius(Math.ceil(value))}
                            
                        />
                    </View>

                {/* Preference Box */}
                <Text style = {styles.sections}>Preferences</Text>
                <View style = {styles.settingsBox}>
                    <View style = {styles.preferences}>
                        <View style = {styles.moonView}><Image style = {styles.moon} source={require('../../assets/userSettingsIcons/DarkMode.png')}/></View>
                        
                        <Text style = {styles.textFonts}>Dark Theme (cs approved)</Text>
                        <View style = {styles.switch}>
                            <Switch
                                trackColor={{ false: "#1b1b1b" , true: "#1b1b1b" }}
                                thumbColor={darkTheme === 1 ? colors.accent : colors.white}
                                ios_backgroundColor = "#1b1b1b"
                                onValueChange={toggleDarkSwitch}
                                value={darkTheme === 1 ? true : false}
                            />
                        </View>
                    </View>
                    <View style = {styles.preferences}>
                    <View style = {styles.plantView}><Image style = {styles.plant} source={require('../../assets/userSettingsIcons/VeganPrio.png')}/></View>
                        <Text style = {styles.textFonts}>Vegan Prioritization</Text>
                        <View style = {styles.switch}>
                            <Switch
                                trackColor={{ false: "#1b1b1b" , true: "#1b1b1b" }}
                                thumbColor={vegan === 1 ? colors.accent : colors.white}
                                ios_backgroundColor = "#1b1b1b"
                                onValueChange={toggleVeganSwitch}
                                value={vegan === 1 ? true : false}
                            />
                        </View>
                    </View>
                
                </View>
            </View>

            

            <View style = {styles.save}>
                <Pressable style = {styles.button} onPress={() => {onPressPost();}}>
                    <Text style = {styles.textStyle}>save</Text>
                </Pressable>
            </View>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backButton:{
        position: 'absolute',
        left: 20,
        top: 30
    },
    backButtonText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
    },
    header:{
        backgroundColor: colors.accent,
        height: 100,
        alignItems: 'center'
    },
    save:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
        elevation: 5
    },
    button: {
        backgroundColor: colors.accent,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    sections:{
        fontFamily: 'GigaSansSemiBold',
        fontSize: 20,
        // paddingLeft: 15,
        paddingVertical: 10,
        marginTop: '5%'
    },
    textStyle:{
        color: colors.white,
    },
    textStyleHeader:{
        fontFamily: 'GigaSansSemiBold',
        fontSize: 20,
        color: colors.white,
    },
    settingsBox:{
        width: '100%',
        height: 120,
        // alignSelf: 'center',

        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: colors.background,
        borderRadius: 5
    },
    profileSettingsBox:{
        width: '100%',
        height: 120,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: colors.background,
        borderRadius: 5
    },
    textFonts:{
        fontFamily: 'GigaSansReg',
    },
    rate:{
        width: 350,
        height: 40,
        alignSelf: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: colors.background,
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    ratePress:{
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    preferences:{
        flexDirection: 'row',
        flex: .5,
        alignItems: 'center'
    },
    switch:{
        alignItems: 'flex-end',
        flex: 1,
        paddingRight: 10
    },
    moon:{
        width: 30,
        height: 30,
        
    },
    moonView:{
        paddingHorizontal: 10
    },
    plant:{
        width: 30,
        height: 21,
        
    },
    backArrow: {
        marginTop: 15,
        color: colors.white,
    },
    plantView:{
        paddingHorizontal: 10
    },
    location:{
        width: 30,
        height: 30,
    },
    locationView:{
        paddingHorizontal: 10
    },
    locations:{
        flexDirection: 'row',
        flex: .7,
        alignItems: 'center'
    },
    input:{
        borderBottomColor: colors.light,
        borderWidth: 1,
        borderTopColor: colors.background,
        borderLeftColor: colors.background,
        borderRightColor: colors.background,
        width: 220,
        fontFamily: 'GigaSansReg'
    },
    profileText:{
        color: "gray",
        fontFamily: 'GigaSansExtraLight'
    },
    profilePic:{
        width: 80,
        height: 80,
    },
    border: {
        marginLeft: 9,
        marginRight: 9
    }
   
})

export default UserSettingsScreen;