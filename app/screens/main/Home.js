import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

import Search from '../../components/svgicons/Search'
import Notifications from '../../components/svgicons/Notifications'
import Calender from '../../components/svgicons/Calender'


import Hom from '../../components/svgicons/Home';
import Category from '../../components/svgicons/Category';
import Profile from '../../components/svgicons/Profile';
import Add from '../../components/svgicons/Add';
import Users from '../../components/svgicons/Users';


export default function Home({ navigation }) {
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
                <View>
                    {/* <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} automaticallyAdjustContentInsets={false}>
                            <TouchableOpacity style={{ marginRight: 5 }}>
                                <View>
                                    <Image style={{ width: 60, height: 60, borderRadius: 9999, borderWidth: 2, borderColor: '#C4B5FD' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 5 }}>
                                <View>
                                    <Image style={{ width: 60, height: 60, borderRadius: 9999, borderWidth: 2, borderColor: '#C4B5FD' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 5 }}>
                                <View>
                                    <Image style={{ width: 60, height: 60, borderRadius: 9999, borderWidth: 2, borderColor: '#C4B5FD' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View> */}
                    <View style={{ marginTop: 30 }}>
                        <ScrollView contentContainerStyle={{  }}>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, color: '#1F2937', marginBottom: 2 }}>Food Zone</Text>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 20, borderWidth: 2.5, borderColor: '#FFFBEB', marginTop: 20, marginLeft: -30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>John Doe 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Tobi Yani 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Yemisi Rich 💬</Text>
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#1F2937', marginBottom: 2 }}>Omoineededlong name 💬</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>999 👨‍🍳👩‍🍳</Text>
                                    <Text style={{ fontFamily: 'Barlow_500Medium', fontSize: 20, color: '#1F2937', marginLeft: 5, marginRight: 5, opacity: 0.6 }}>/</Text>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 14, color: '#1F2937', opacity: 0.6 }}>9999 💬</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
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
                    <Profile />
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
