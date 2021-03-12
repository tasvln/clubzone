import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity } from 'react-native'


export default function SignIn({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ padding: 20, }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 34, textAlign: 'center', color: '#1F2937' }}>ClubZone 👋</Text>
                        <View style={{ marginTop: 40 }}>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', color: '#8B5CF6', fontSize: 18 }}>Enter Email</Text>
                                <TextInput 
                                    style={{ padding: 20, backgroundColor: '#FFF', marginTop: 10, borderRadius: 10, color: '#1F2937', fontFamily: 'Barlow_400Regular', fontSize: 24 }}
                                    placeholder='club@zone.co'
                                    keyboardType='email-address'
                                />
                            </View>
                            <TouchableOpacity style={{ padding: 20, marginTop: 10, backgroundColor: '#8B5CF6', borderRadius: 10, }} onPress={() => navigation.navigate('Verify')}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Barlow_600SemiBold', color: '#fff' }}>Next</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Barlow_600SemiBold' }}>Don't Have An Account? Register</Text>
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
