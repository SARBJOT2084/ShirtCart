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
        <View>
            <FlatList data={Items} renderItem={({ item }) => <Box props={item} />} horizontal snapToAlignment="center" showsHorizontalScrollIndicator={false} />
        </View>


        // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="flex flex-row space-x-3 ">
        //     <View>
        //         <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.l9VaDG5vpbwIuyCnvuCXqQHaHa&pid=Api&P=0' }} className="h-24 w-24 rounded-full " />
        //         <Text className="text-center">Men</Text>
        //     </View>
        //     <View>
        //         <Image source={{ uri: 'https://img.faballey.com/images/Product/TOP06044Z/1.jpg' }} className="h-24 w-24 rounded-full " />
        //         <Text className="text-center">Women</Text>
        //     </View>
        //     <View>
        //         <Image source={{ uri: 'https://images.meesho.com/images/products/126452379/0ctrl_256.webp' }} className="h-24 w-24 rounded-full" />
        //         <Text className="text-center">Kids</Text>
        //     </View>
        //     <View>
        //         <Image source={{ uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19873404/2022/9/10/b4583fe7-8b92-45ab-bf2f-929c6944f4151662787021581VanHeusenNavyBlazer1.jpg' }} className="h-24 w-24 rounded-full" />

        //         <Text className="text-center">Office</Text>
        //     </View>
        //     <View>
        //         <Image source={{ uri: 'https://images.bewakoof.com/web/latest-fashion-trends-bewakoof-blog-2-1621402702.jpg' }} className="h-24 w-24 rounded-full" />
        //         <Text className="text-center">Trending</Text>
        //     </View>
        // </ScrollView>
    )
}

export default ItemsSlider