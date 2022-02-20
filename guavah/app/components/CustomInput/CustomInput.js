import React from 'react';
import colors from '../../config/colors/colors';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {


    return (
        
            <Controller         
                control={control}
                name = {name}
                rules = {rules}
                render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <>
                        <View style = {[styles.container, {borderColor: error ? 'red' : 'white'}]}>
                            <TextInput 
                                value = {value} 
                                onChangeText = {onChange} 
                                onBlur = {onBlur} 
                                placeholder = {placeholder}
                                style = {styles.input}
                                secureTextEntry = {secureTextEntry}
                            />
                        </View>
                        {error && (<Text style = {{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>)}
                    </>
                )}
            />

        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.light,

        paddingHorizontal: 13,
        marginVertical: 10,
    },
    input: {
        height: 48,
        color: colors.text,
    },
})

export default CustomInput;