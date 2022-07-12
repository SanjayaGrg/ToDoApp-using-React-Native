
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import colors from '../mics/colors';
import RoundButton from '../components/RoundButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';

// create a component
const Intro = ({ onFinish }) => {
    const [name, setName] = useState('');

    const handleOnChangeText = (text) => { setName(text) }

    const handleSubmit = async () => {
        const user = { name: name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        if (onFinish) onFinish();
    }

    return (
        <>
            <StatusBar transparent />
            <View style={styles.container}>
                <Text style={styles.InputTitle}>Enter your name to continue:</Text>
                <TextInput
                    value={name}
                    onChangeText={handleOnChangeText}
                    style={styles.textInput}
                    placeholder='Enter your name'
                />

                <TouchableOpacity>
                    {name.trim().length >= 3 ? (<RoundButton IconName='arrow-forward' onPress={handleSubmit} />) : null}
                </TouchableOpacity>


                {/* <TouchableOpacity>
                    <RoundButton />
                </TouchableOpacity> */}




            </View>
        </>

    );
};
const width = Dimensions.get('window').width - 50;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 15

    },
    InputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 15,
        marginBottom: 10,
        opacity: 0.6,

    },
});

export default Intro;
