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
            
            <Sale />

        </View>
    )
}

export default Home