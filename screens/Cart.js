import { Platform,SafeAreaView,View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import CartItems from '../components/CartItems';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
const Cart = () => {
  let [fontsLoaded] = useFonts({

    Pacifico_400Regular,Montserrat_400Regular
});
if (!fontsLoaded) {
    return null;
}
  return (
    <SafeAreaView style={{height:'100%',paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0}}>
    <View className="h-[10%] flex flex-row space-x-3">
          <View className="my-auto">
            <Icon name="arrow-left" size={23} />
          </View>
          <View>
            <Image source={require('../assets/logo.png')} className="h-28 w-28 my-auto" />
          </View>
      </View>
      <View className="h-[90%]">
        <Image source={{'uri':'https://cdn-icons-png.flaticon.com/512/5497/5497111.png'}} className="my-[20%] mx-auto h-32 w-32"/>
        <Text style={{marginLeft:'auto',marginRight:'auto',fontFamily:'Montserrat_400Regular',fontSize:15}}>Looks like your cart is empty</Text>
        <TouchableOpacity className="h-14 w-3/5 rounded-xl mx-auto mt-3 bg-rose-500 text-white"><Text className="my-auto mx-auto text-white">Continue Shopping</Text></TouchableOpacity>
      </View>
      {/* <View className="h-[15%] flex flex-row">
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
      </ScrollView> */}
      {/* <Image source={{ 'uri': 'https://cdn-icons-png.flaticon.com/512/5497/5497111.png' }} className="w-40 h-52 rounded-t-lg" /> */}


   


    </SafeAreaView>

  )
}

export default Cart