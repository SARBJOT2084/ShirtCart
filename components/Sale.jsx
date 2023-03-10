import { View, Text, Image, } from 'react-native';
import React, { useState, useEffect } from 'react';

const Sale = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "March, 15, 2023";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <View>
            <Text className="text-2xl mt-[10%] ml-[10%] mb-[5%]">Top Deals</Text>
            <Text className="mb-[3%] text-lg">Ends in {days}{"d "}{hours}{"h "}{minutes}{"m "}{seconds}{"s"}</Text>
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