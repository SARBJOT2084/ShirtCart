import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const ItemsSlider = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mx-5 flex flex-row space-x-4 mb-2">
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2977/2977922.png' }} className="object-fill h-12" />
                <Text className="mx-auto text-xs">Deals</Text>

            </View>
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2957/2957379.png' }} className="object-fill h-12" />
                <Text className="mx-auto text-xs">Men</Text>
            </View>
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2149/2149674.png' }} className="object-fill h-12" />
                <Text className="mx-auto text-xs">Women</Text>
            </View>
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3345/3345385.png' }} className="object-fill h-12" />
                <Text className="mx-auto text-xs">Inner</Text>
            </View>
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4378/4378432.png' }} className="object-fill h-12" />
                <Text className="mx-auto text-xs">Party</Text>
            </View>
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1716/1716846.png' }} className="object-fill h-12" />
                <Text className="mx-auto text-xs">Kids</Text>
            </View>
            <View className="w-14">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4818/4818457.png' }} className="object-fill h-12" />
                <Text className="text-xs mx-auto">Office</Text>
            </View>
            <View className="w-8 px-auto py-auto">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/570/570223.png' }} className="object-fill h-8" />
                <Text className="text-[10px] mx-auto">More</Text>
            </View>
        </ScrollView>

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