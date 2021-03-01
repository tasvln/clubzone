import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

import Search from '../../components/svgicons/Search'
import Notifications from '../../components/svgicons/Notifications'
import Calender from '../../components/svgicons/Calender'
import Back from '../../components/svgicons/Back';


import Hom from '../../components/svgicons/Home';
import Category from '../../components/svgicons/Category';
import Profil from '../../components/svgicons/Profile';
import Add from '../../components/svgicons/Add';
import Users from '../../components/svgicons/Users';
import Settings from '../../components/svgicons/Settings'
import Twitter from '../../components/svgicons/Twitter'
import Instagram from '../../components/svgicons/Instagram'


export default function ZonesProfile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Back/>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 26 }}>Food Zone</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 35 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                </View>
                <View style={{ marginTop: 25, marginBottom: 25, marginLeft: 'auto', marginRight: 'auto', flex: 1 }}>
                    <ScrollView>
                        <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 18, textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat. Aliquam semper neque a libero vehicula, non consequat metus efficitur. Donec ornare risus id leo venenatis, nec interdum risus vehicula.</Text>
                        <View style={{ paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#f9f9f9', marginTop: 40 }}>
                            <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>1.4k Members</Text>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('UsersProfile')}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text onPress={() => navigation.navigate('UsersProfile')} style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 20, }}>Dev Ninja</Text>
                                    </View>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                        <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                        <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('UsersProfile')}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text onPress={() => navigation.navigate('UsersProfile')} style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 20, }}>Dev Ninja</Text>
                                    </View>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                        <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                        <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('UsersProfile')}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text onPress={() => navigation.navigate('UsersProfile')} style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 20, }}>Dev Ninja</Text>
                                    </View>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                        <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                        <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('UsersProfile')}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text onPress={() => navigation.navigate('UsersProfile')} style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 20, }}>Dev Ninja</Text>
                                    </View>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                        <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                        <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('UsersProfile')}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text onPress={() => navigation.navigate('UsersProfile')} style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 20, }}>Dev Ninja</Text>
                                    </View>
                                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                        <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                        <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
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
