import { View, Text, Image, } from 'react-native';
import React, { useState, useEffect } from 'react';

const Sale = () => {
    const [seconds, setSeconds] = useState(60);
    const [hours, setHours] = useState(4);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);

            if (seconds <= 0) {
                setSeconds(seconds + 60);
                setHours(hours => hours - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <View>
            <Text className="text-2xl mt-[10%] ml-[10%] mb-[5%]">Top Deals</Text>
            <View className="bg-rose-500 h-80 w-full flex flex-row mb-[10%]">
                <View className="mr-auto ml-[5%] my-auto bg-white w-5/12 h-[95%] rounded-lg">
                    <Image source={{ 'uri': 'https://m.media-amazon.com/images/I/81YzCyvYUfL._AC_UL480_FMwebp_QL65_.jpg   ' }} className="w-full h-full" resizeMode='contain' />
                </View>
                <View className="ml-auto mr-[5%] my-auto w-7/12 h-[88%]">
                    <View className="bg-white w-[70%] h-1/2 ml-[25%] rounded-lg mb-[5%]">
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/71YzaYMh6-L._AC_UL480_FMwebp_QL65_.jpg' }} className="w-full h-full" resizeMode="contain" />
                    </View>
                    <View className="bg-white w-[70%] h-1/2 ml-[25%] rounded-lg ">
                        <Image source={{ uri: 'https://m.media-amazon.com/images/I/91empUxGzkS._AC_UL480_FMwebp_QL65_.jpg' }} className="w-full h-full" resizeMode="contain" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Sale