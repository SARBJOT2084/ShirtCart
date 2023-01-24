import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
const data = [
  {
    id: 1,
    des: "Louis phillipe Tshirt",
  },
  {
    id: 2,
    des: '',
  },
  {
    id: 3,
    des: '',
  }
]
function Box(props) {
  return <View className="w-full h-[40%] py-9 border-b-2 border-b-gray-300">
    <View className="flex flex-row mx-[10%]">
      <View className="mr-auto"><Text className="text-lg font-bold">{props.text}</Text></View>
    </View>
  </View>
}
const Cart = () => {
  return (
    <View>
      {/**Your cart is empty or else it is has items */}
      {/**Making  */}
      <View className="px-[5%] py-[5%] w-full h-[15%] flex flex-row">
        <View className="mr-auto"><Image source={require("../assets/logo.png")} className="h-20 w-20" /></View>

      </View>
      <View className="h-[15%] bg-rose-500">
        <Text className="mx-auto my-auto text-white text-md">
          Your Items
        </Text>
      </View>
      {/**Vanhuesen,Allen Solly,Nike Sweatshirt, */}
      <ScrollView className="h-[65%]">
        <Box text="Vanhusen"/>
        <Box text="Allen Solly"/>
        <Box text="Nike"/>
        <Box text="Puma"/>
       
      </ScrollView>

    </View>

  )
}

export default Cart