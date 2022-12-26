import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
const Searchbar = () => {
    return (
        <View className="w-full mx-auto mt-4">
            <View className="flex flex-row ">
                
                <Icon name="search" size={25} style={{ marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', paddingLeft: 4, }} />
                <TextInput placeholder="Search ShirtCart" className="border-2 border-rose-500 h-12 rounded-md w-full pl-8" />
                <Icon1 name="mic" size={25} style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', }} />
            </View>

        </View>
    )
}

export default Searchbar