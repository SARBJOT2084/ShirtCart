import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Searchbar from './Searchbar';
import ItemsSlider from './ItemsSlider';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
{/**60% */ }
const Navbar = () => {

    return (
        <View className="w-full h-[15%] fixed bg-gray-500 z-50">
            <View className="mx-[6%] my-[8%] flex flex-row">

                <View className="mr-auto">
                    <Image source={require('../assets/logo.png')} className="h-28 w-28" />
                </View>
                <View className="ml-auto my-[8%]">
                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }}
                        className="w-12 h-12 rounded-lg "
                    />
                </View>
            </View>
        </View>
    )
}

export default Navbar

