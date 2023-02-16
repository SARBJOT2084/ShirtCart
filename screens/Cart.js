import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import CartItems from '../components/CartItems';



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
        <CartItems />
      </ScrollView>


      {/**Vanhuesen,Allen Solly,Nike Sweatshirt, */}


    </View>

  )
}

export default Cart