import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import VerticalRestaurantBox from '../../components/VerticalRestaurantBox';
import colors from '../../config/colors/colors';

function VersusScreen(props) {
    const item = ["testName", 2, 20, null];

    return (
        <View style={containerStyles.container}>
            <View style={containerStyles.refreshContainer}>
                <View style={containerStyles.refreshButtonContainer}>
                    <Text style={textStyle.text}>versus</Text>
                    <CustomButton 
                        text={'Shuffle'}
                        type={'PRIMARY'}
                    />
                </View>
            </View>

            <View style={containerStyles.versusContainer}>
                <Text style={textStyle.versusText}>Which was better?</Text>
                <Text style={textStyle.versusTextSmall}>This decision will impact their rank.</Text>
                <View style={containerStyles.versusRestaurantContainer}>
                    <VerticalRestaurantBox restaurant={item}/>
                    <VerticalRestaurantBox restaurant={item}/>
                </View>
            </View>

        </View>
        
    );
}

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    refreshContainer: {
        backgroundColor: colors.accent,
        // backgroundColor: colors.background,
        width: '100%',
        height: '13%',
        //Do I need to add height value?
        //height: 0,
    },
    refreshButtonContainer: {
        flex: 1,
        height: '100%',
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '11%',
        // How do I move shuffle button down more?
    },
    versusContainer: {
        flex: 1,
        maxHeight: '100%',
    },

    versusRestaurantContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
        
})
    const textStyle = StyleSheet.create({
        text: {
            color: colors.background,
            // color: colors.accent,
            textAlign: 'center',
            fontSize: 30,
            height: '100%',
    
            // marginBottom: '10%',
    
            // ...Platform.select({
            //     android: {
            //         marginTop: '10%',
            //     },
            // })
        },

        versusText: {
            color: colors.accent,
            textAlign: 'center',
            fontSize: 30,
            marginTop: '40%',
        },

        versusTextSmall: {
            color: colors.accent,
            // color: 'black',
            textAlign: 'center',
            fontSize: 16,
            marginTop: '0%',
        },
    });


export default VersusScreen;
