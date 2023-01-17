import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { SearchBar } from 'react-native-screens';
import ItemsSlider from '../components/ItemsSlider';
import Categories from './Categories.js';
import Sale from '../components/Sale';
import { SafeAreaView } from 'react-native-safe-area-context';

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
const Home = () => {
    return (
        <View>
            <Navbar />
            {/**Image Carosuel */}
            
            <SafeAreaView>
                <ScrollView className="h-[70%] mt-5" showsVerticalScrollIndicator={false}>
                    <ItemsSlider />
                    {/* <Categories /> */}

                    {/**Categories */}
                    <View className="flex flex-row"><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1685/1685230.png' }} className="h-16 w-16 mx-3" />
                        <Text className="font-bold my-auto mx-auto text-lg text-green-700">Hot Deals!!!</Text>
                    </View>

                    <Text className="text-green-600 font-bold">Ends in <Live /></Text>


                    <Sale />
                    {/**/}
                    <View className="bg-rose-500 h-24">

                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>
    )
}

export default Home