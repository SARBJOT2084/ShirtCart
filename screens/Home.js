import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import { SearchBar } from 'react-native-screens';
import ItemsSlider from '../components/ItemsSlider';

import Sale from '../components/Sale';


const Home = () => {
    return (
        <View>
            <Navbar />
            <View className=""></View>
            <Sale />
            <View className="bg-rose-500 h-24">

            </View>
        </View>
    )
}

export default Home