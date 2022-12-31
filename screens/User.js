import { View, Text, Image } from 'react-native'
import React from 'react'
function Info() {
    return (<View className="py-5 px-5">
        <View className="flex flex-row">
            <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-44 w-24 ml-auto" />
            <Text className="text-xl mr-auto">Micheal Jordan</Text>
        </View>
    </View>)
}
const User = () => {
    return (
        <View>

            <Info />
        </View>
    )
}

export default User