import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Intro from './app/screens/Intro';
import MainScreen from './app/screens/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NoteDetail from './app/components/NoteDetail';

const Stack = createNativeStackNavigator()

const App = () => {
  const [user, setUser] = useState({});

  const renderMainScreen = (props) => <MainScreen {...props} user={user} />
  const findUser = async () => {

    const result = await AsyncStorage.getItem('user')
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };
  useEffect(() => {
    findUser()
  }, [])

  if (!user.name) return <Intro onFinish={findUser} />
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={renderMainScreen} name='To-do List' />
          <Stack.Screen component={NoteDetail} name='NoteDetail' />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
  // <MainScreen user={user} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  }
})


export default App
