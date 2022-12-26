import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Searchbar from './Searchbar';
const Navbar = () => {
    return (
        <View>
            {/**logo,location,change location */}
            {/**Searchbar */}

            <View className="shadow-lg shadow-cyan-500/50 w-full px-4 pt-12 pb-8  ">
                <View className="flex flex-row">
                    <Text className="mr-auto">Hello</Text>
                    <View className="ml-auto flex flex-row space-x-1">
                        <Icon name="location-outline" size={24} />
                        <Text>Chandigarh</Text>
                        <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-10 w-10 rounded-full" />

                    </View>

                </View>
                <View className="ml-auto"><Text className="text-xs text-opacity-20">Change location</Text></View>
                <View><Searchbar /></View>
            </View>


        </View>
    )
}

export default Navbar