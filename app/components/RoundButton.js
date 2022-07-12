
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../mics/colors';

// create a component
const RoundButton = ({ IconName, size, color, style, onPress }) => {
    console.log(IconName);
    return (
        <View style={styles.container}>
            <Icon
                name={IconName}
                size={size || 24}
                color={color || colors.PRIMARY}
                style={[styles.icons, { ...style }]}
                onPress={onPress}
            />
            {/* <Text>Add</Text> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // alignContent: 'flex-end'
        // backgroundColor: '#2c3e50',
    },
    icons: {
        backgroundColor: colors.WHITE,
        padding: 20,
        borderRadius: 50,
        elevation: 5,
        shadowRadius: 20,
        margin: 15,

    },
});

//make this component available to the app
export default RoundButton;
