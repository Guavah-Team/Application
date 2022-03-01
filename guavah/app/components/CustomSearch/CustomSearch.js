import React, { useState } from 'react';
import colors from '../../config/colors/colors';
import { Text, View, TextInput, StyleSheet, Platform  } from 'react-native';
import { Controller } from 'react-hook-form';

export default function CustomSearch({value, updateSearch, style}) {

    const [query, setQuery] = useState(value);
    const [error, setError] = useState();

    return (
        <View style={[styles.container, style]} >
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    {/* Add image from Figma */}
                    {/* <Image 
                        style={styles.icSearch}
                        source=
                        {require('../../assets/images/ic_search.png')}
                    /> */}
                </View>
            
                <TextInput 
                        value={query}
                        placeholder="Search"
                        style={styles.textInput}
                        onChangeText={(text) => {
                            var letters = /^$|^[a-zA-z._\b ]+$/; //Add regex for numbers
                            if (text.match(letters)) {
                                setQuery(text)
                                updateSearch(text)
                                if(error)
                                    setError(false)
                            }
                            else setError("Please only enter alphanumeric characters.")
                        } } 
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        alignItems: 'center',
        ...Platform.select({
            android: {
                marginTop: '11%',
            },
        })
    },
    searchContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 40,
        flexDirection: 'row'
    },
    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})