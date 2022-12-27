import { View, Text } from 'react-native'
import React from 'react'
function Box(props) {
  return (<View><Text>{props.name}</Text></View>);
}
const Wishlist = () => {
  return (
    <View>
      <Box name="hello" />
      <View className="h-10 bg-black w-full"></View>
    </View>
  )
}

export default Wishlist