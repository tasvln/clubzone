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

export default function Zones({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View style={styles.Header}>
                    <TouchableOpacity>
                        <Search />
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Notifications />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }}>
                            <Calender />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <ScrollView>
                        <Text style={{ fontSize: 16, fontFamily: 'Barlow_600SemiBold', marginBottom: 15, opacity: 0.4 }}>Clubs</Text>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Barlow_600SemiBold', marginBottom: 10 }}>Food Zone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 20 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 35, height: 35, borderRadius: 10 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 5 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20, marginLeft: 10, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 9999, backgroundColor: '#7C3AED' }}>
                                            <Text style={{ marginRight: 5, fontSize: 16, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>+</Text>
                                            <Text style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Zone</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontFamily: 'Barlow_400Regular', fontSize: 16, color: '#1F2937', opacity: 0.6, marginTop: 6 }}>9999 Members Online</Text>
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
