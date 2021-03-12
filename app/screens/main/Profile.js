import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

import Search from '../../components/svgicons/Search'
import Notifications from '../../components/svgicons/Notifications'
import Calender from '../../components/svgicons/Calender'


import Hom from '../../components/svgicons/Home';
import Category from '../../components/svgicons/Category';
import Profil from '../../components/svgicons/Profile';
import Add from '../../components/svgicons/Add';
import Users from '../../components/svgicons/Users';
import Settings from '../../components/svgicons/Settings'
import Twitter from '../../components/svgicons/Twitter'
import Instagram from '../../components/svgicons/Instagram'


export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View style={{ marginBottom: 20, display: 'flex', marginLeft: 'auto' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Settings />
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 35 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 26, textAlign: 'center' }}>Dev Ninja</Text>
                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, marginTop: 2, textAlign: 'center' }}>@Ade</Text>
                </View>
                <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', backgroundColor: '#8B5CF6', color: '#FFF', paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 15 }}>
                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 24, color: '#FFF' }}>9999</Text>
                        <Text style={{ marginLeft: 5, fontFamily: 'Barlow_400Regular', fontSize: 18, color: '#FFF' }}>followers</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', backgroundColor: '#8B5CF6', color: '#FFF', paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 15 }}>
                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 24, color: '#FFF' }}>9999</Text>
                        <Text style={{ marginLeft: 5, fontFamily: 'Barlow_400Regular', fontSize: 18, color: '#FFF' }}>following</Text>
                    </View>
                </View>
                <View style={{ marginTop: 25, marginBottom: 25 }}>
                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 20, textAlign: 'center' }}>Cruise & Food</Text>
                </View>
                {/* <View style={{  }}>
                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 14, }}>Socials</Text>
                    <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Twitter />
                            <Text style={{ marginLeft: 8, fontFamily: 'Barlow_400Regular', fontSize: 18, }}>@omoooo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <Instagram />
                            <Text style={{ marginLeft: 8, fontFamily: 'Barlow_400Regular', fontSize: 18, }}>@omooooo</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
            <View style={{ padding: 20, backgroundColor: '#EDE9FE', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Hom />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Add />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Profil />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDE9FE'
    },
    Header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Cards: {
        padding: 26,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 20,
    }
});
