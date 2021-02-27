import React, { useState } from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, ScrollView, Switch } from 'react-native'
import Back from '../../components/svgicons/Back';


export default function Settings({ navigation }) {
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View style={{  }}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Back/>
                        <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, padding: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Barlow_600SemiBold', marginBottom: 15, opacity: 0.4 }}>Account</Text>
                            <View style={styles.optionscard}>
                                <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#F3F4F6'}} onPress={() => navigation.navigate('ChangeUsername')}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Change Username</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#F3F4F6'}} onPress={() => navigation.navigate('ChangePassword')}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Change Password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18, color: '#EF4444' }}>Delete Account</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Barlow_600SemiBold', marginBottom: 15, opacity: 0.4 }}>Notifications</Text>
                            <View style={styles.optionscard}>
                                <View style={{ padding: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Stop Notifications</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#22C55E" }}
                                        thumbColor={isEnabled ? "#fff" : "#fff"}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Barlow_600SemiBold', marginBottom: 15, opacity: 0.4 }}>Info</Text>
                            <View style={styles.optionscard}>
                                <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#F3F4F6'}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>What's New</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#F3F4F6'}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Comunity Guidelines</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#F3F4F6'}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Terms & Conditions</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16, borderBottomWidth: 1.5, borderBottomColor: '#F3F4F6'}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Privacy Policy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 16}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 18 }}>Developer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginBottom: 60 }}>
                            <View style={styles.optionscard}>
                                <TouchableOpacity style={{ padding: 16}}>
                                    <Text style={{ fontFamily: 'Barlow_600SemiBold', fontSize: 20, color: '#EF4444' }}>Log Out</Text>
                                </TouchableOpacity>
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
    optionscard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10
    }
});
