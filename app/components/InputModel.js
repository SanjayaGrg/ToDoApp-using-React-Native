//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, Touchable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import colors from '../mics/colors';
import RoundButton from './RoundButton';

// create a component
const InputModel = ({ visible, onclose, onsubmit }) => {


    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleModalClose = () => {
        Keyboard.dismiss();
    }

    const handleChangeText = (text, valueFor) => {
        if (valueFor === 'title') setTitle(text);
        if (valueFor === 'desc') setDesc(text);
    };

    const handleIconChange = () => {
        // if ()

    };
    const onClose = () => {
        setTitle('');
        setDesc('');
        onclose();
    }

    const handleSubmit = () => {
        if (!title.trim() && !desc.trim()) return onclose()
        onsubmit(title, desc);
        setTitle('');
        setDesc('');
        onclose();
    };



    return (
        <>
            <StatusBar hidden />
            <Modal visible={visible} animationType='fade'>
                <View style={styles.container}>

                    <TextInput
                        style={[styles.input, styles.title]}
                        placeholder='Title'
                        value={title}
                        onChangeText={(text) => handleChangeText(text, 'title')}
                    />
                    <TextInput
                        style={[styles.input, styles.description]}
                        multiline
                        value={desc}
                        onChangeText={(text) => handleChangeText(text, 'desc')}
                        placeholder='Description'
                    />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity>
                            {desc.trim().length >= 15 ? (<RoundButton IconName='add'
                                // style={styles.icons}
                                size={20}
                                onPress={handleSubmit}
                                onChangeText={() => handleIconChange} />) : null}

                        </TouchableOpacity>
                        {title.trim() || desc.trim() ? (<RoundButton
                            IconName='cancel'
                            size={20}
                            onPress={onClose}
                            onChangeText={() => handleIconChange}

                        />) : null}
                    </View>

                </View>
                <TouchableWithoutFeedback onPress={handleModalClose}>
                    <View style={styles.ModalBg}></View>
                </TouchableWithoutFeedback>

            </Modal>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.PRIMARY,
        fontSize: 20,
        color: colors.DARK,
    },
    title: {
        height: 50,
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    description: {
        height: 100,
        color: '#2ecc71',
        fontSize: 15
    },
    ModalBg: {
        flex: 1,
        zIndex: -1,
    },
    icons: {
        backgroundColor: colors.WHITE,
        padding: 20,
        borderRadius: 50,
        elevation: 5,
        shadowRadius: 20,
        margin: 15,
        position: 'absolute',
        right: 15,
        // bottom: 50,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
    },
});

export default InputModel;
