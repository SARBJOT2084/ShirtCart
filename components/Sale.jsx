import { View, Text } from 'react-native'
import React from 'react'
function Box(props) {
    const d = new Date();

    return (
        <View className="bg-rose-500 h-52 pl-4">

            <View className=" shadow-lg shadow-black w-1/2 h-44 rounded-lg  mr-auto bg-white my-auto">
                <View className="h-4 bg-gray-300 mt-auto"></View><Text>Hello</Text>
            </View>

        </View>
    );
}
const Sale = () => {
    return (
        <View>
            <Box h="32" name="20" />
        </View>
    )
}

export default Sale