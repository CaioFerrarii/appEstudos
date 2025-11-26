import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import Home from './components/Home';
import AddStudy from './components/AddStudy';
import StudyList from './components/StudyList';
import StudySummary from './components/StudySummary';

import { initDB } from './database/Database';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    initDB();  // cria a tabela na primeira execução
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddStudy" component={AddStudy} />
        <Stack.Screen name="StudyList" component={StudyList} />
        <Stack.Screen name="StudySummary" component={StudySummary} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
