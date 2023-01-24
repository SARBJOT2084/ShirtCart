import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Searchbar from './Searchbar';
import ItemsSlider from './ItemsSlider';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
{/**60% */}
const Navbar = () => {

    return ( 
        <View className="w-full h-[40%] fixed">
            <View className="flex flex-row my-[5%] mx-5">
                <View className="mr-auto my-auto"><Image source={require('../assets/logo.png')} className="h-28 w-28" /></View>
                <View className="ml-auto my-auto flex flex-row">

                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-10 w-10 rounded-full" />
                </View>
                
            </View>
        </View>
    )
}

export default Navbar
{/*<View className="h-[30%] z-50">
            <View className="w-full px-4 pt-12 pb-5">
                <View className="flex flex-row">
                    <Image source={require('../assets/logo.png')} className="h-28 w-28" />
                    <View className="ml-auto flex flex-row space-x-1">
                        <Icon name="location-outline" size={24} />
                        <Text>Chandigarh</Text>
                        <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-10 w-10 rounded-full" />

                    </View>

                </View>
                <View><Searchbar /></View>
            </View>
           

            </View>



    </View>*/}
