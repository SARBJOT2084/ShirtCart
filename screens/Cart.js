import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
const data = [
  {
    id: 1,
    des: "Louis phillipe Tshirt",
  },
  {
    id: 2,
    des: 'Polo Shirt',
  },
  {
    id: 3,
    des: "Zara Men's shirt",
  }
]
function Box({ props }) {
  return <Text>
    {props.des}
  </Text>
}
const Cart = () => {
  return (
    <View className="h-full w-full">
      {/**Your cart is empty or else it is has items */}
      {/**Making  */}
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
      <ScrollView className="h-[75%]">
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