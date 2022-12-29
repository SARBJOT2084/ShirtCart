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
            {/**Image Carosuel */}
            <View className=""></View>
            {/**Categories */}
            <Sale />
            {/**/}
            <View className="bg-rose-500 h-24">

            </View>
        </View>
    )
}

export default Home