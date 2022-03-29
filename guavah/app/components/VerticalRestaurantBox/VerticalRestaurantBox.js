import React from 'react';
import {StyleSheet, Pressable, ImageBackground, Text, View, Alert, Image} from 'react-native';
import colors from '../../config/colors/colors';
import {useNavigation} from '@react-navigation/native';
import placeHolder from '../../assets/defaults/VerticalDefault.png';

function VerticalRestaurantBox({restaurant, type="SMALL"}) {
    const {name, rating, distance, photo, location, id} = restaurant;
    const navigation = useNavigation();

    // console.log(photo);

    return (
        <Pressable 
        onPress={() => {
            navigation.navigate('RestaurantScreen', {
                name: name,
                photo: photo,
                location: location,
                FSQID: id,
            });
        }}
        style = {[styles[`container_${type}`], styles.shadowProp]}>
            <ImageBackground imageStyle = {{borderRadius: 10}} style = {styles.backgroundImage} defaultSource={require('../../assets/defaults/VerticalDefault.png')} source = {{uri: photo}}>
                <View style = {styles.mask}/>
                <View style = {styles.topTextBox}>
                    <Text style = {styles.restaurantNameText}> {name} </Text>
                </View>
                <View style = {styles.centerLogo}>
                    <Image source = {require('../../assets/ICONS/Tier-1-Badge-(Base).png')}></Image>
                </View>
                <View style = {styles.bottomTextBox}>
                    <Text style = {styles.distanceText}> {(distance / 1609).toFixed(2)} Miles </Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container_SMALL: {
        width: 150,
        height: 200,
        marginRight: 10,
    },
    container_LARGE: {
        width: 150,
        height: 316,
        marginRight: 10,
    },
    restaurantNameText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        borderRadius: 10,
    },
    distanceText: {
        color: colors.white,
        fontSize: 12,
        textTransform: 'capitalize',
    },
    topTextBox: {
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTextBox: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 21,
        left: 43,
        right: 43
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    centerLogo: {
        position: 'absolute',
        top: 89,
        left: 57,
        right: 56,
        bottom: 78,
    }
})

export default VerticalRestaurantBox;