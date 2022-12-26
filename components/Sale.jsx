import { View, Text, Image } from 'react-native'
import React from 'react'
function Box(props) {
    const d = new Date();

    return (
        <View className="bg-rose-500 h-80 pl-4">
            <View className="mr-auto mt-8 flex flex-row">
                <View className="bg-white h-11/12 w-1/2 shadow-lg shadow-black rounded-lg">
                    <Image
                        className="object-cover h-5/6 mb-auto  rounded-t-lg"
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXpAouLrbt22rZiAVJCcmOFhu3EGcuV3lww&usqp=CAU' }} />
                    <Text className="mb-auto ml-5 text-green-700 line-through">Rs.3400&nbsp;</Text>

                </View>
                <View className="w-1/2">
                    <View className="ml-4   h-32 bg-white w-36 shadow-lg shadow-black rounded-lg ">
                        <Image
                            className="h-full   object-cover"
                            source={{ uri: 'data:image/jpeg;base64,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' }} />
                    </View>
                    <View className="ml-4  mt-4 h-32 bg-white w-36 shadow-lg shadow-black rounded-lg ">

                    </View>
                </View>

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