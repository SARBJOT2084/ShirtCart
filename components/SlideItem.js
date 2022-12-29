import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');

const SlideItem = ({ props }) => {
    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
            <Text>{props.id}</Text>
        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    }
})