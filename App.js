import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Slider from './components/Slider';

import Tabs from './navigation/tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import Product from './screens/Product';

export default function App() {

  return (
    <View>


      {/* <Home /> */}
      {/* <Login /> */}
      <Product />


      {/* <NavigationContainer style={{ marginTop: 'auto', }}>
        <Tabs />

      </NavigationContainer> */}
      {/* <Slider /> */}
      <StatusBar style="auto" />
    </View>
  );
}
