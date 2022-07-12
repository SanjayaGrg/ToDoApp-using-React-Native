
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../mics/colors';

// create a component
const Searchbar = ({ containerStyle }) => {
    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <TextInput
                style={styles.searchbar}
                placeholder='search here.....'
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    searchbar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        paddingLeft: 15,
        fontSize: 15,
    },
});

//make this component available to the app
export default Searchbar;
