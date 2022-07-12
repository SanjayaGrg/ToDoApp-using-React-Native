
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import RoundButton from '../components/RoundButton';
import Searchbar from '../components/Searchbar';
import colors from '../mics/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputModel from '../components/InputModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../components/Note';

// create a component
const MainScreen = ({ user, navigation }) => {
    const [greet, setGreet] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [notes, setNotes] = useState([]);

    const findGreet = () => {
        const hours = new Date().getHours()
        if (hours === 0 || hours < 12)
            return setGreet('Morning');
        if (hours === 1 || hours > 17)
            return setGreet('Afternoon');

        setGreet('Evening');

    }
    const handleModalClose = () => {
        Keyboard.dismiss();
    }
    const handleOnSubmit = async (title, desc) => {
        const time = (new Date()).getTime()
        const note = { id: Date.now(), title, desc, time }
        // console.log(note);

        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));

    }
    const findNote = async () => {
        const result = await AsyncStorage.getItem('notes');
        console.log(result)
        if (result !== null) setNotes(JSON.parse(result));

    }
    const openNote = (note) => {
        navigation.navigate('NoteDetail', { note })
    }
    useEffect(() => {
        // AsyncStorage.clear();
        findNote();
        findGreet()
    }, [])
    return (
        <>
            <StatusBar
                barStyle='dark-content' backgroundColor={colors.WHITE}
            />
            <TouchableWithoutFeedback onPress={handleModalClose}>

                <View style={styles.container}>
                    <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
                    {notes.length ? (<Searchbar
                        containerStyle={{ marginVertical: 15 }}
                    />) : null}

                    <FlatList
                        data={notes}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Note onPress={() => openNote(item)} item={item} />}
                    />
                    {!notes.length ? (<View style={styles.headingContainer}>
                        <Text style={styles.heading}>
                            Add Notes
                        </Text>

                    </View>) : null}

                    <TouchableOpacity>
                        <RoundButton IconName='add' size={30}
                            style={styles.icons}
                            onPress={() => setModalVisible(true)}
                        />
                    </TouchableOpacity>

                </View>

            </TouchableWithoutFeedback>
            <InputModel visible={modalVisible} onclose={() => setModalVisible(false)}

                onsubmit={handleOnSubmit}
            />

        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffff',
        paddingHorizontal: 20,
        // zIndex: 1
    },
    header: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    heading: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.2
    },
    headingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    icons: {
        position: 'absolute',
        right: 15,
        bottom: 50,
        elevation: 5,

    },
});

//make this component available to the app
export default MainScreen
    ;
