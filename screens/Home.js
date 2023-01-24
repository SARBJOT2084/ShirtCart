import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import ItemsSlider from '../components/ItemsSlider';
import Categories from './Categories.js';
import Sale from '../components/Sale';
import { SafeAreaView } from 'react-native-safe-area-context';
import Searchbar from '../components/Searchbar';

import Location from '../components/location';
const Live = () => {
    var deadline = new Date("Dec 31, 2022 15:37:25").getTime();
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    var str = days + " d " + hours + " h " + minutes + " m " + seconds + " s ";
    const [currentTime, setTime] = useState(str);
    const timer = () => { setTime(str) };
    useEffect(
        () => {

            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        }, [currentTime],
    );

    return <Text>{currentTime}</Text>;
}
{/**Navbar(60%),Searchbar(22%), */ }
const Home = () => {
    return (
        <View>
            <Navbar />
            <Searchbar />








        </View>
    )
}

export default Home