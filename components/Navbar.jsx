import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Searchbar from './Searchbar';
import ItemsSlider from './ItemsSlider';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
const Navbar = () => {
    return (
        <View className="h-[30%]">
            <View className="w-full px-4 pt-12 pb-5">
                <View className="flex flex-row">
                    {/* <Image source={{ uri: 'https://document-export.canva.com/wALAw/DAFV9PwALAw/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221227T035645Z&X-Amz-Expires=38585&X-Amz-Signature=16ae0db7527a5669420f46d0702518ce5995d946b190a158a9f7cf54d23e53a8&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2027%20Dec%202022%2014%3A39%3A50%20GMT' }} className="h-20 w-20" /> */}
                    <View className="ml-auto flex flex-row space-x-1">
                        <Icon name="location-outline" size={24} />
                        <Text>Chandigarh</Text>
                        <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-10 w-10 rounded-full" />

                    </View>

                </View>
                <View className="ml-auto"><Text className="text-xs text-opacity-20">Change location</Text></View>
                <View><Searchbar /></View>
            </View>
            <View className="bg-rose-500  h-12 w-full mb-5">
                <View className="flex flex-row my-auto mx-auto space-x-1">
                    <Text className=" text-white">Deliver to 140308 ,India</Text>
                    <Icon1 name="my-location" size={25} color="white" />
                </View>

            </View>



        </View>
    )
}

export default Navbar