import { View, Text, FlatList } from 'react-native';
import React from 'react';
{/**Recent Launch */ }
const data = [
    {
        id: 1,
        url: '',
        info: ''
    },
    {
        id: 2,
        url: '',
        info: ''
    },
    {
        id: 3,
        url: '',
        info: ''
    },
    {
        id: 4,
        url: '',
        info: ''
    }
]
const Box = ({ props }) => {
    return
    (
        <View>
             
        </View>
    );
}
const Recent = () => {
    return (
        <View className="h-72 w-full">
            <Text className="text-xl ml-[5%]">Recent Launches</Text>
            <View className="h-44">
                <FlatList />
            </View>
        </View>
    )
}

export default Recent