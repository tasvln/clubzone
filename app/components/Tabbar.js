import React from 'react'
import { View, TouchableOpacity, Touchable } from 'react-native'
import Home from './svgicons/Home';
import Category from './svgicons/Category';
import Profile from './svgicons/Profile';
import Add from './svgicons/Add';
import Users from './svgicons/Users';

export default function Tabbar({ navigation }) {
    return (
        <View style={{ padding: 20, backgroundColor: '#FFFBEB', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Home />
            </TouchableOpacity>
            <TouchableOpacity>
                <Category />
            </TouchableOpacity>
            <TouchableOpacity>
                <Add />
            </TouchableOpacity>
            <TouchableOpacity>
                <Users />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Profile />
            </TouchableOpacity>
        </View>
    )
}