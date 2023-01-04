import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Feather';
const data = [{
  id: 1,
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81GnwNupdbL._UL1500_.jpg',
  brand: 'Vanhuesen',
  des: 'Men s fit T-shirt',
}, {
  id: 1,
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61k669kSWrL._AC_UL480_FMwebp_QL65_.jpg',
  brand: 'Allen Solly',
  des: 'Women T-shirt',
}, {
  id: 2,
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71xttxqd2nL._AC_UL480_FMwebp_QL65_.jpg',
  brand: 'Adidas',
  des: 'Men Regular Fit T-shirt',
}
  , {
  id: 3,
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61z2kEj6wpL._AC_UL480_FMwebp_QL65_.jpg',
  brand: 'Raymond',
  des: 'Men Wool Bend',
}
]
function Box() {
  return (
    <View className="w-full border-b-gray-200  h-36 flex flex-row  mx-3 space-x-8">
      <View>

        <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0606/8007/7463/products/50W7423_001_main_e6e4086e-5f44-4f3a-ae29-3feb37fcf81b_256x.jpg?v=1655128812' }} className="h-32 w-32" />
      </View>
      <View>
        <View className="mb-auto">
          <Text className="font-bold">Vanhuesen</Text>

        </View>
        <View className="mt-auto flex flex-row">
          <View className="mr-auto"><Text>Rs.5,990</Text></View>
          <View className="ml-auto space-x-8"><View className="w-24 h-9 rounded-xl bg-black"><Pressable className="space-x-3 flex flex-row"><Icon name="shopping-bag" size={25} /><Text>Add</Text></Pressable></View></View>
        </View>

      </View>
    </View>
  )
}
const Wishlist = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular, Montserrat_700Bold, Montserrat_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View className="h-[10%] mx-10 mt-[15%] flex flex-row">
        <View className="mr-auto"><Icon name="arrow-left" size={25} /></View>
        <View className="ml-auto space-x-2 flex flex-row"><Icon name="bell" size={25} /><Icon name="search" size={25} /><Icon1 name="bag" size={25} /></View>
      </View>
      <View className=" px-5 mb-[10%] border-b-black-2 fixed">

        <View className="mr-auto">
          <Text className="text-xl" style={{ fontFamily: 'Pacifico_400Regular' }} >
            Your Wishlist&nbsp;&nbsp; ❤️
          </Text>
          <View className="w-full  flex flex-row justify-center mt-[15%]">
            <View className="bg-black w-32 h-10 rounded-l-lg"><Text className="text-white mx-auto my-auto" style={{ fontFamily: 'Montserrat_400Regular' }}>All</Text></View>
            <View className="bg-gray-200 w-32 h-10 rounded-r-lg"><Text className="mx-auto my-auto" style={{ fontFamily: 'Montserrat_400Regular' }}>Suggested</Text></View>
          </View>

        </View>

      </View>
      <ScrollView className="h-[65%]" showsVerticalScrollIndicator={false}>
        <Box />
        <Box />
        <Box />
        <Box />
      </ScrollView>



    </View>

  )
}
export default Wishlist