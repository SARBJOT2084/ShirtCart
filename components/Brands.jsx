import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const data = [
  {
    id: 1,
    url: 'https://th.bing.com/th?id=OIP.gUcZOm2tWAb4-pa0TqFliAHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    info: 'Levis upto 60% off',
  },
  {
    id: 2,
    url: 'https://th.bing.com/th?id=OIP.5UcWcIk3VqB2JRgT6ADheQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    info: 'Zara starting from Rs.2500',
  },
  {
    id: 3,
    url: 'https://th.bing.com/th?id=OIP.QBpfyRy3Ozr0GyeI1CvTqwHaFA&w=304&h=205&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    info: 'Adidas upto 50% off',
  }
  ,
  {
    id: 4,
    url: 'data:image/jpeg;base64,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',
    info: ' starts from Rs.800',
  }
]
const Logo = ({ props }) => {
  return (
    <View className="bg-gray-200 w-56 h-40 mx-4 rounded-lg">
      <Image source={{ uri: props.url }} className="w-full h-4/5" resizeMode='contain' />
      <Text className=" text-lg mx-auto ">{props.info}</Text>
    </View>
  )
}
const Brands = () => {
  return (
    <View className="mb-12">
      <Text className="mt-[10%] mb-[5%] text-xl">Best-Selling Brands</Text>
      <FlatList data={data} renderItem={({ item }) => <Logo props={item} />} horizontal snapToAlignment="center" showsHorizontalScrollIndicator={false} />
    </View>
  )
}
export default Brands;

