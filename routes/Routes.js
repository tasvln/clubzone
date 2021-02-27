import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../app/screens/auth/SignIn'
import SignUp from '../app/screens/auth/SignUp'
import Verify from '../app/screens/auth/Verify'
import ChangeUsername from '../app/screens/auth/ChangeUsername'
import ChangePassword from '../app/screens/auth/ChangePassword'
import Home from '../app/screens/main/Home';
import Profile from '../app/screens/main/Profile';
import Zones from '../app/screens/main/Zones';
import People from '../app/screens/main/People';
import Settings from '../app/screens/main/Settings';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ animationEnabled: false }} initialRouteName="SignIn" headerMode="none">
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Verify" component={Verify} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Zones" component={Zones} />
                <Stack.Screen name="People" component={People} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
