
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// create a component
const Note = ({ item, onPress }) => {
    const { title, desc } = item;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
            <Text numberOfLines={3}>{desc} </Text>
        </TouchableOpacity>
    );
};

const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width / 2 - 10,
        backgroundColor: '#e67e22',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

//make this component available to the app
export default Note
    ;
