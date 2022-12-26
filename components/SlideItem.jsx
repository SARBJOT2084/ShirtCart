import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const SlideItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Image source={item.img} resizeMode="contain" style={styles.image} />
            <View>

                <Text style={styles.price}>{item.name}</Text>
            </View>
        </View>

    )
}


export default SlideItem
