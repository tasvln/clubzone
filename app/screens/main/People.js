import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, Image, ScrollView, TouchableHighlight } from 'react-native'

import Search from '../../components/svgicons/Search'
import Notifications from '../../components/svgicons/Notifications'
import Calender from '../../components/svgicons/Calender'


import Hom from '../../components/svgicons/Home';
import Category from '../../components/svgicons/Category';
import Profil from '../../components/svgicons/Profile';
import Add from '../../components/svgicons/Add';
import Users from '../../components/svgicons/Users';

export default function People({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => navigation.navigate('ExploreModal')}>
                        <Search />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationsModal')}>
                        <Notifications />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}>
                    <ScrollView>
                        <Text style={{ fontSize: 16, fontFamily: 'Barlow_600SemiBold', marginBottom: 15, opacity: 0.4 }}>People You Follow</Text>
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
            <View style={{ padding: 20, backgroundColor: '#EDE9FE', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Hom />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Zones')}>
                    <Category />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Add />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('People')}>
                    <Users />
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
