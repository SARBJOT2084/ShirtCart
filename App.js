import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Slider from './components/Slider';

import Tabs from './navigation/tabs';
import Home from './screens/Home';
import Login from './screens/Login';

export default function App() {
  const slides = [
    { id: 1, name: "he", url: 'https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=750&format=png&optimize=medium' }, { id: 2, name: "she", url: 'https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=750&format=png&optimize=medium' }, { id: 3, name: "hh", url: 'https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=750&format=png&optimize=medium' }];
  return (
    <View>

      {/* 
      <Home /> */}

      {/* <Login /> */}



      {/* <NavigationContainer style={{ marginTop: 'auto', }}>
        <Tabs />

      </NavigationContainer> */}
      <Slider />
      <StatusBar style="auto" />
    </View>
  );
}
