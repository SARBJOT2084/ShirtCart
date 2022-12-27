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
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mx-5 flex flex-row space-x-4 mb-2">
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2977/2977922.png' }} className="object-fill h-12" />
                    <Text className="mx-auto text-xs">Deals</Text>

                </View>
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2957/2957379.png' }} className="object-fill h-12" />
                    <Text className="mx-auto text-xs">Men</Text>
                </View>
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2149/2149674.png' }} className="object-fill h-12" />
                    <Text className="mx-auto text-xs">Women</Text>
                </View>
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3345/3345385.png' }} className="object-fill h-12" />
                    <Text className="mx-auto text-xs">Inner</Text>
                </View>
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4378/4378432.png' }} className="object-fill h-12" />
                    <Text className="mx-auto text-xs">Party</Text>
                </View>
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1716/1716846.png' }} className="object-fill h-12" />
                    <Text className="mx-auto text-xs">Kids</Text>
                </View>
                <View className="w-14">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4818/4818457.png' }} className="object-fill h-12" />
                    <Text className="text-xs mx-auto">Office</Text>
                </View>
                <View className="w-8 px-auto py-auto">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/570/570223.png' }} className="object-fill h-8" />
                    <Text className="text-[10px] mx-auto">More</Text>
                </View>
            </ScrollView>
            {/* <ItemsSlider /> */}
            {/* <C /> */}
            <Sale />
        </View>
    )
}

export default Home