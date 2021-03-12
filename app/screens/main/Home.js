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
import Share from '../../components/svgicons/Share'


export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20, paddingBottom: 20, flex: 1 }}>
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
                                <View>
                                    <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, alignItems: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, marginLeft: 5, color: '#1F2937' }}>+999 Others</Text>
                                    </View>
                                    <Share />
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <View>
                                    <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, alignItems: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, marginLeft: 5, color: '#1F2937' }}>+999 Others</Text>
                                    </View>
                                    <Share />
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <View>
                                    <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, alignItems: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, marginLeft: 5, color: '#1F2937' }}>+999 Others</Text>
                                    </View>
                                    <Share />
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <View>
                                    <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, alignItems: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, marginLeft: 5, color: '#1F2937' }}>+999 Others</Text>
                                    </View>
                                    <Share />
                                </View>
                            </View>
                            <View style={styles.Cards}>
                                <View>
                                    <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>👨‍🍳👩‍🍳 Random Bants About Cooking Food</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, alignItems: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB' }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Image style={{ width: 50, height: 50, borderRadius: 9999, borderWidth: 2, borderColor: '#FFFBEB', marginLeft: -25 }} source={{ uri: 'https://picsum.photos/200/300' }} />
                                        <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 16, marginLeft: 5, color: '#1F2937' }}>+999 Others</Text>
                                    </View>
                                    <Share />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <View style={{ padding: 20, backgroundColor: '#EDE9FE', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Hom />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Add />
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
