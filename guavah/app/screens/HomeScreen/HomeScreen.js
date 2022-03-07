import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function HomeScreen(props) {
    return (
        <View style = {styles.container}>
            <Text>HOME</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default HomeScreen;