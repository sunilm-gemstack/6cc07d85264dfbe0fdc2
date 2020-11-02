import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import InfoScreen from '../screens/Info/AsteroidInfo';

const Stack = createStackNavigator();
const appNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'info'} component={InfoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default appNavigation;
