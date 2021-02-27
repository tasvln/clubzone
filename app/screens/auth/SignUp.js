import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity } from 'react-native'

export default function SignUp({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ padding: 20, }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 34, textAlign: 'center', color: '#1F2937' }}>ClubZone 👋</Text>
                        <View style={{ marginTop: 50 }}>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', color: '#8B5CF6', fontSize: 18 }}>Enter Your Full Name</Text>
                                <View style={{  marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}> 
                                    <TextInput 
                                        style={{ padding: 20, backgroundColor: '#FFF', borderRadius: 10, color: '#1F2937', fontFamily: 'Barlow_400Regular', fontSize: 24 }}
                                        placeholder='First Name'
                                    /> 
                                    <TextInput 
                                        style={{ padding: 20,  backgroundColor: '#FFF', borderRadius: 10, color: '#1F2937', fontFamily: 'Barlow_400Regular', fontSize: 24 }}
                                        placeholder='Last Name'
                                    />
                                </View>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', color: '#8B5CF6', fontSize: 18 }}>Enter Username</Text>
                                <TextInput 
                                    style={{ padding: 20, backgroundColor: '#FFF', marginTop: 10, borderRadius: 10, color: '#1F2937', fontFamily: 'Barlow_400Regular', fontSize: 24 }}
                                    placeholder='Username'
                                    keyboardType='phone-pad'
                                />
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', color: '#8B5CF6', fontSize: 18 }}>Enter Phone Number</Text>
                                <TextInput 
                                    style={{ padding: 20, backgroundColor: '#FFF', marginTop: 10, borderRadius: 10, color: '#1F2937', fontFamily: 'Barlow_400Regular', fontSize: 24 }}
                                    placeholder='+2340000000000'
                                    keyboardType='phone-pad'
                                />
                            </View>
                            <TouchableOpacity style={{ padding: 20, marginTop: 10, backgroundColor: '#8B5CF6', borderRadius: 10, }} onPress={() => navigation.navigate('Verify')}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Barlow_600SemiBold', color: '#fff' }}>Next</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignIn')}>
                                <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Barlow_600SemiBold' }}>Already Have An Account? Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDE9FE'
    },
});
