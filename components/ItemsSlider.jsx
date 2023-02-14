import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
const Items = [
    {
        id: 1,
        url: 'https://cdn-icons-png.flaticon.com/512/2977/2977922.png',
        text: 'Men',
    },
    {
        id: 2,
        url: 'https://cdn-icons-png.flaticon.com/512/2957/2957379.png',
        text: 'Women',
    },
    {
        id: 3,
        url: 'https://cdn-icons-png.flaticon.com/128/3345/3345385.png',
        text: 'Inner',
    },
    {
        id: 4,
        url: 'https://cdn-icons-png.flaticon.com/128/4378/4378432.png',
        text: 'Party',
    }
    , {
        id: 5,
        url: 'https://cdn-icons-png.flaticon.com/512/1716/1716846.png',
        text: 'Kids'
    }
    , {
        id: 6,
        url: 'https://cdn-icons-png.flaticon.com/512/4818/4818457.png',
        text: 'Office'
    },
    {
        id: 7,
        url: 'https://cdn-icons-png.flaticon.com/512/570/570223.png',
        text: 'More'
    }

]
function Box({ props }) {
    return (<View className="w-14 mx-5">
        <Image source={{ uri: props.url }} className="object-fill h-12"
        />
        <Text className="mx-auto text-xs">{props.text}</Text>
    </View>)
}
const ItemsSlider = () => {
    return (
        <View className="my-[5%] fixed">
            <FlatList data={Items} renderItem={({ item }) => <Box props={item} />} horizontal snapToAlignment="center" showsHorizontalScrollIndicator={false} className="fixed" />
        </View>
    )
}

export default ItemsSlider