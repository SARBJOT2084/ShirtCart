import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react';

const ChangeView = (sec) => {
    const [currentCount, SetCount] = useState(sec);
    SetCount(currentCount - 1);
    return (<Text>{currentCount}</Text>)
}

const Categories = () => {
    const hello = 32;
    return (
        <View>
            <ScrollView className="w-full mx-2 my-4 flex flex-row space-x-2" horizontal showsHorizontalScrollIndicator={false}>

                <Pressable className="border-2 border-rose-400 h-10 w-20 rounded-3xl" onPress={() => { console.log("Button clicked!!!!") }}><Text className="mx-auto my-auto text-rose-400">All</Text></Pressable>
                <Pressable className="border-2 border-rose-400 h-10 w-20 rounded-3xl" onPress={() => { console.log("Button Clicked!!!!") }}><Text className="mx-auto my-auto text-rose-400">Offers</Text></Pressable>
                <Pressable className="border-2 border-rose-400 h-10 w-20 rounded-3xl" onPress={() => { console.log("Button Clicked!!!!") }}><Text className="mx-auto my-auto text-rose-400">Trending</Text></Pressable>
                <Pressable className="border-2 border-rose-400 h-10 w-20 rounded-3xl" onPress={() => { console.log("Button Clicked!!!!") }}><Text className="mx-auto my-auto text-rose-400">Men</Text></Pressable>
                <Pressable className="border-2 border-rose-400 h-10 w-20 rounded-3xl" onPress={() => { console.log("Button Clicked!!!!") }}><Text className="mx-auto my-auto text-rose-400">Women</Text></Pressable>

            </ScrollView>
            {/**Main View of Categories */}
            <View className="w-full h-3/5  flex flex-row">
                {/*Men,Women,Trending,*/}
                {/**Four Sections Men,Women,Office,Kids */}
                {/**Can swtich between any of them section */}
                {/**Viewing a product will open a new window */}
        
            </View>

        </View>

    )
}

export default Categories

