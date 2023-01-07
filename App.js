import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Slider from './components/Slider';

import Tabs from './navigation/tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import Product from './screens/Product';
import User from './screens/User';
import Wishlist from './screens/Wishlist';

export default function App() {

  return (
    <View>


      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Product /> */}
      {/* <Wishlist /> */}
      <User />
      {/* <NavigationContainer>
        <Tabs />
      </NavigationContainer> */}
      {/* <Slider /> */}
      <StatusBar style="auto" />
    </View>
  );
}
