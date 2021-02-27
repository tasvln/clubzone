import React from 'react'
import Routes from './routes/Routes';
import { 
  Barlow_100Thin,
  Barlow_100Thin_Italic,
  Barlow_200ExtraLight,
  Barlow_200ExtraLight_Italic,
  Barlow_300Light,
  Barlow_300Light_Italic,
  Barlow_400Regular,
  Barlow_400Regular_Italic,
  Barlow_500Medium,
  Barlow_500Medium_Italic,
  Barlow_600SemiBold,
  Barlow_600SemiBold_Italic,
  Barlow_700Bold,
  Barlow_700Bold_Italic,
  Barlow_800ExtraBold,
  Barlow_800ExtraBold_Italic,
  Barlow_900Black,
  Barlow_900Black_Italic,
  useFonts 
} from '@expo-google-fonts/barlow'
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Barlow_100Thin,
    Barlow_100Thin_Italic,
    Barlow_200ExtraLight,
    Barlow_200ExtraLight_Italic,
    Barlow_300Light,
    Barlow_300Light_Italic,
    Barlow_400Regular,
    Barlow_400Regular_Italic,
    Barlow_500Medium,
    Barlow_500Medium_Italic,
    Barlow_600SemiBold,
    Barlow_600SemiBold_Italic,
    Barlow_700Bold,
    Barlow_700Bold_Italic,
    Barlow_800ExtraBold,
    Barlow_800ExtraBold_Italic,
    Barlow_900Black,
    Barlow_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Routes />
  );
}