import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Searchbar = () => {
    return (
        <View className="z-40 h-[7%] w-full my-[5%]">
            <View className="w-full h-full flex flex-row">
                <Icon1 name="search" size={24} style={{ marginTop: 'auto', marginBottom: 'auto', left: '60%' }} />
                <TextInput className="h-full w-11/12 mx-auto  border-2 border-rose-500 rounded-lg pl-12 " />
                <Icon1 name="mic" size={24} style={{ marginTop: 'auto', marginBottom: 'auto', right: '60%' }} />
            </View>

        </View>
    )
}
{/**
 <View className="h-[12%] w-full fixed mb-[10%]">
            <View className="w-full h-full flex flex-row">
                <Icon1 name="search" size={24} style={{ marginTop: 'auto', marginBottom: 'auto', left: '60%' }} />
                <TextInput className="h-full w-11/12 mx-auto  border-2 border-rose-500 rounded-lg pl-[12%]"></TextInput>
                <Icon1 name="mic" size={24} style={{ marginTop: 'auto', marginBottom: 'auto', right: '60%' }} />
            </View>
            <View className="bg-rose-500 w-full h-full mt-[10%] flex flex-row mb-20">
                <View className="mx-auto my-auto flex flex-row space-x-3"><Text className="text-white">Deliver at 140308</Text><MaterialIcons name="my-location" size={20} color="white" /></View>
                <View className="mx-auto my-auto"><Text className="text-white underline">Change</Text></View>
            </View>
        </View>
*/}

export default Searchbar