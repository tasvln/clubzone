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
import Usersprofile from '../app/screens/main/UsersProfile';
import Zonesprofile from '../app/screens/main/ZonesProfile';
import Zones from '../app/screens/main/Zones';
import People from '../app/screens/main/People';
import Settings from '../app/screens/main/Settings';


import ExploreModal from '../app/screens/main/modals/ExploreModal';
import NotificationsModal from '../app/screens/main/modals/NotificationsModal';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainRoutes() {
    return (
        <MainStack.Navigator screenOptions={{ animationEnabled: false }} initialRouteName="SignIn" headerMode="none">
            <MainStack.Screen name="SignIn" component={SignIn} />
            <MainStack.Screen name="SignUp" component={SignUp} />
            <MainStack.Screen name="Verify" component={Verify} />
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="Zones" component={Zones} />
            <MainStack.Screen name="People" component={People} />
            <MainStack.Screen name="Settings" component={Settings} />
            <MainStack.Screen name="ChangeUsername" component={ChangeUsername} />
            <MainStack.Screen name="ChangePassword" component={ChangePassword} />
            <MainStack.Screen name="UsersProfile" component={Usersprofile} />
            <MainStack.Screen name="ZonesProfile" component={Zonesprofile} />
        </MainStack.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none" mode="modal">
                <RootStack.Screen name="Main" component={MainRoutes} />
                <RootStack.Screen name="NotificationsModal" component={NotificationsModal} />
                <RootStack.Screen name="ExploreModal" component={ExploreModal} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
