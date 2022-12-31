import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
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
    <View className="w-full border-b-gray-400 border-2 h-44 flex flex-row">
      <View className="mr-auto ">

        <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0606/8007/7463/products/50W7423_001_main_e6e4086e-5f44-4f3a-ae29-3feb37fcf81b_256x.jpg?v=1655128812' }} className="h-40 w-40" />
      </View>
      <View className="ml-auto">
        <Text className=" font-bold mr-10" style={{ fontFamily: 'sans-serif' }}>Vanhuesen</Text>
        <Text>Rs.5,990</Text>
      </View>


    </View>
  )
}
const Wishlist = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular, Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView>

      <View className="flex flex-row mt-[25%] px-5">
        <View className="mr-auto">
          <Text className="text-xl" style={{ fontFamily: 'Pacifico_400Regular' }} >
            Your Wishlist
          </Text>
        </View>


      </View>




      <Box />
      <Box />
      <Box />

      {/*Image,Price,detail,Decription */}
      {/**Review Section*/}
      <Box />
      <Box />
      <Box />



    </ScrollView>
  )
}

export default Wishlist