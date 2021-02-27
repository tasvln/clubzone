import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity } from 'react-native'
import Back from '../../components/svgicons/Back';


export default function ChangeUsername({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ padding: 20, }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                                <Back/>
                                <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>Verify</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontFamily: 'Barlow_600SemiBold', color: '#8B5CF6', fontSize: 18 }}>Enter Verification Code</Text>
                                <TextInput 
                                    style={{ padding: 20, backgroundColor: '#FFF', marginTop: 10, borderRadius: 10, color: '#1F2937', fontFamily: 'Barlow_400Regular', fontSize: 24 }}
                                    placeholder='Enter 6-Digit Code'
                                />
                            </View>
                            <TouchableOpacity style={{ padding: 20, marginTop: 10, backgroundColor: '#8B5CF6', borderRadius: 10, }} onPress={() => navigation.navigate('Home')}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Barlow_600SemiBold', color: '#FFF' }}>Verify</Text>
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
