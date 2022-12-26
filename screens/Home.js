import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar';
import { SearchBar } from 'react-native-screens';
import ItemsSlider from '../components/ItemsSlider';

import Sale from '../components/Sale';


const Home = () => {
    return (
        <View>
            <Navbar />
            <ItemsSlider />
            {/* <C /> */}
            <Sale />
        </View>
    )
}

export default Home