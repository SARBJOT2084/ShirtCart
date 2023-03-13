import { View, Image ,Text} from 'react-native'
import React from 'react';
const Navbar = () => {
    return (
        <View className="w-full h-[20%] fixed z-50 ">
            <View className="mx-[6%] my-[8%] flex flex-row">

                <View className="mr-auto">
                    <Image source={require('../assets/logo.png')} className="h-28 w-28" />
                </View>
                <View className="ml-auto my-[7%]">
                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }}
                        className="w-12 h-10 rounded-lg "
                    />
                </View>

            </View>
       
        </View>
    )
}

export default Navbar

