import { View, Text, Image } from 'react-native'
import React from 'react'
function Box(props) {
    var deadline = new Date("Jan 5,2022 15:37:25").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
    }, 1000);

    return (
        <View className="bg-rose-500 h-80 pl-4">

            <View className="mr-auto mt-8 flex flex-row">
                <View className="bg-white h-11/12 w-1/2 shadow-lg shadow-black rounded-lg">
                    <Image
                        className="object-cover h-5/6 mb-auto  rounded-t-lg"
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXpAouLrbt22rZiAVJCcmOFhu3EGcuV3lww&usqp=CAU' }} />
                    <View className="flex flex-row mb-auto px-4">
                        <Text className="my-auto mx-auto">Starts Rs. 3000</Text>

                    </View>


                </View>
                <View className="w-1/2">
                    <View className="ml-4   h-32 bg-white w-36 shadow-lg shadow-black rounded-lg ">
                        <Image
                            className="h-full object-cover rounded-lg"
                            source={{ uri: 'https://images.meesho.com/images/products/125395965/rcupw_256.jpg' }} />
                    </View>

                    <View className="ml-4  mt-4 h-32 bg-white w-36 shadow-lg shadow-black rounded-lg ">
                        <Image
                            className="h-full object-cover rounded-lg"
                            source={{ uri: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/2/b/x/m-p2amw271-tommy-hilfiger-original-imagggrzztxhsfeq.jpeg?q=70' }} />
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