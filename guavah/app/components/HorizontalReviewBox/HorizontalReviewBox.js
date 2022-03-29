import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../config/colors/colors';
import { Auth } from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons'; 
import {SvgUri} from 'react-native-svg';

function RestaurantReview({restaurant}) {
    const {Name, Rating, Review, ProfilePhoto, icon} = restaurant;
    
    return (
        <View style = {styles.container}>
            <View style = {styles.userBox}>
                {/* <Image style = {styles.userImage} source = {{uri: "https://fastly.4sqi.net/img/general/original/77124221_3W_pIRAP9ESb7aEAN90y1l2Hfq4lXSSLx5erlFHCyRA.jpg"}}></Image> */}
                <SvgUri style = {styles.userImage} uri={ProfilePhoto}/>
                <View style = {styles.textBox}>
                    <Text style = {styles.user}>{Name}</Text>
                    {/* <Text style = {styles.rank}>{userLevel}</Text> */}
                </View>
                <Ionicons name = {icon} style = {styles.thumb}/>
            </View>
            <Text style = {styles.message}>{Review}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 110,
        paddingLeft: 24,
        paddingTop: 20,
        backgroundColor: colors.white,
        borderRadius: 6,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    userBox: {
        flexDirection: 'row',
    },
    textBox: {
        marginLeft: 5,
    },
    user: {
        fontSize: 16,
        fontWeight: '600',
    },
    userImage: {
        width: 45,
        height: 45,
    },
    rank: {
        fontSize: 12,
        fontWeight: '400',
    },
    message: {
        fontSize: 12,
        fontWeight: '400',
    },
    thumb: {
        fontSize: 20,
        position: 'absolute',
        right: 24,
    },
})

export default RestaurantReview;