import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
const data = [
  {
    id: 1,
    url: 'https://m.media-amazon.com/images/I/71KVYfwW3+L._AC_UL480_FMwebp_QL65_.jpg',
    des: "Louis phillipe Tshirt",
    size: 'XL',
    gender: 'Men',
    price: '4500',
  },
  {
    id: 2,
    url: 'https://m.media-amazon.com/images/I/61JqO0+72yL._AC_UL480_FMwebp_QL65_.jpg',
    des: 'Polo Shirt',
    size: 'L',
    gender: 'Men',
    price: '3800',
  },
  {
    id: 3,
    url: 'https://m.media-amazon.com/images/I/51BKsDt0i9L._AC_UL480_FMwebp_QL65_.jpg',
    des: "Vero Moda shirt",
    size: 'M',
    gender: 'Women',
    price: '2400',
  }
]

const Box = ({ props }) => {
  return (
    <View className="w-full h-56 mx-auto border-b-2 border-b-gray-300 flex flex-row">
      <View className="w-1/2 h-4/5 mr-auto my-auto">
        <Image source={{ uri: props.url }} className="w-full h-full" resizeMode="contain" />

      </View>
      <View className="w-1/2 h-4/5 ml-auto my-auto">
        <Text className="mx-auto text-lg">{props.des}</Text>
        <Text className="mx-auto text-xs"> Size : {props.size}</Text>
        <Text className="mx-auto font-bold ">Rs.{props.price}</Text>
        <TouchableOpacity className="bg-rose-500 w-4/5 rounded-lg h-11 mt-[10%] mx-auto"><Text className="m-auto  text-white">Proceed For Payment</Text></TouchableOpacity>
        <TouchableOpacity className="bg-gray-300 w-4/5 rounded-lg h-11 mt-[10%] mx-auto"><Text className="mx-auto my-auto ">Remove&nbsp;&nbsp;<Icon name="trash" size={24} /></Text></TouchableOpacity>

      </View>
    </View>
  );
}
const Cart = () => {
  return (
    <View className="h-full w-full">

      <View className="h-[15%] flex flex-row">
        <View className="mr-auto my-auto flex flex-row space-x-3">
          <View className="my-auto  ">
            <Icon name="arrow-left" size={23} />
          </View>
          <View>
            <Image source={require('../assets/logo.png')} className="h-[90%] w-20 my-auto" />

          </View>
        </View>
        <View className="ml-auto my-auto flex flex-row space-x-3">
          <Icon name="bell" size={23} />
          <Icon name="search" size={23} />

        </View>

      </View>
      <View className="bg-rose-500 h-[10%] w-full">
        <Text className="m-auto text-white">Your Items</Text>
      </View>
      <ScrollView className="h-[75%]" showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Box props={item} />}

        />
      </ScrollView>


      {/**Vanhuesen,Allen Solly,Nike Sweatshirt, */}


    </View>

  )
}

export default Cart