import { View, Text, Image } from 'react-native'
import React from 'react'
const data = [{
  id: 1,
  img: '',
  des: '',
}, {
  id: 1,
  img: '',
  des: '',
}, {
  id: 1,
  img: '',
  des: '',
}]
function Box() {
  return (
    <View className="w-full border-b-gray-400 h-32 flex flex-row ">
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvTmZKZ5QFtrOhMC4fJXHFQ2CzH8Tex46VQ&usqp=CAU' }} className="mr-auto" />
      <Text>Product 1</Text>
    </View>
  )
}
const Wishlist = () => {
  return (
    <View>
      <Box />
      <Box />
      {/*Image,Price,detail,Decription */}
      {/**Review Section*/}


    </View>
  )
}

export default Wishlist