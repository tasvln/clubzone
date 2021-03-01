import React from 'react'
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

import Back from '../../../components/svgicons/Back';
import Searchtwo from '../../../components/svgicons/Searchtwo';

export default function ExploreModal({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Back/>
                        <Text style={{ fontFamily: 'Barlow_700Bold', fontSize: 24, color: '#1F2937' }}>Explore</Text>
                    </TouchableOpacity>
                    <View style={{ position: 'relative', marginTop: 20, }}>
                        <View style={{ position: 'absolute', zIndex: 1, marginTop: 12, marginLeft: 10 }}>
                            <Searchtwo />
                        </View>
                        <TextInput 
                            style={styles.searchInput}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <ScrollView style={{  }}>
                        
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
    },
    searchInput: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        paddingLeft: 44,
        borderRadius: 10,
        color: '#000',
        fontSize: 18,
    }
});
