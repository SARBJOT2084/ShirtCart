import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
function Info() {
    return (<View className="py-[25%] px-[10%]">
        <View className="flex flex-row">
            <View className="mr-auto">
                <Text className="text-xl font-bold">Hello,Aman</Text>
            </View>
            <View className="ml-auto">
                <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-12 w-12 rounded-full" />
            </View>


        </View>
    </View>)
}
const data = [
    {
        id: 1,
        text: 'Orders',
    },
    {
        id: 2,
        text: 'Buy Again',
    }

];
function Options({ props }) {
    return (<View className="py-20 px-20">
        <View className="border-2 border-gray-400 h-16 w-32 py-auto px-auto">
            <Text className="text-lg">{props.text}</Text>

        </View>
    </View>);
}
const User = () => {
    return (
        <View>
            <Icon name="notifications-outline" size={23} />
            <Info />
            <FlatList data={data} renderItem={({ item }) => <Options props={item} />} horizontal showsHorizontalScrollIndicator={false} />

        </View>
    )
}

export default User