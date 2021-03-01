import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

import Back from '../../../components/svgicons/Back';

export default function NotificationsModal({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Back/>
                        <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>Notifications</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30, flex: 1 }}>
                    <ScrollView style={{ }}>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10, maxWidth: 280 }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>John Doe</Text>
                                    <Text style={{ marginTop: 5, fontFamily: 'Barlow_400Regular', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10, maxWidth: 280 }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>John Doe</Text>
                                    <Text style={{ marginTop: 5, fontFamily: 'Barlow_400Regular', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10, maxWidth: 280 }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>John Doe</Text>
                                    <Text style={{ marginTop: 5, fontFamily: 'Barlow_400Regular', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10, maxWidth: 280 }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>John Doe</Text>
                                    <Text style={{ marginTop: 5, fontFamily: 'Barlow_400Regular', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10, maxWidth: 280 }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>John Doe</Text>
                                    <Text style={{ marginTop: 5, fontFamily: 'Barlow_400Regular', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={{ marginLeft: 10, maxWidth: 280 }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>John Doe</Text>
                                    <Text style={{ marginTop: 5, fontFamily: 'Barlow_400Regular', fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sapien odio. Quisque volutpat lectus dictum quam lacinia, at imperdiet turpis consequat.</Text>
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
