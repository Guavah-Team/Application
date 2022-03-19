import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import colors from '../../config/colors/colors';

function VersusScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.refreshContainer}>
                <View style={styles.refreshButtonContainer}>
                    <Text style={styles.text}>versus</Text>
                    <CustomButton 
                        text={'Shuffle'}
                        type={'PRIMARY'}
                    />
                </View>
            </View>

            <View styles={styles.versusContainer}>
                <Text style={styles.versusText}>Which was better?</Text>
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    refreshContainer: {
        backgroundColor: colors.accent,
        width: '100%',
        height: 100,
        //Do I need to add height value?
        //height: 0,
    },
    refreshButtonContainer: {
        flex: 1,
        height: '100%',
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '11%',
    },
    versusContainer: {
        flex: 1,
        maxHeight: '100%',
    },

    text: {
        // color: colors.accent,
        color: colors.background,
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
})

export default VersusScreen;
