import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const data = [
    {
        id: 1,
        url: 'https://imagescdn.vanheusenindia.com/img/app/shopmedia/production/6/6-25-11158.jpg?w=703&auto=format,compress',
    }, {
        id: 2,
        url: 'https://myraymond.com/media/banner/6817504619_1.1.webp',
    }, {
        id: 3,
        url: 'https://imagescdn.vanheusenindia.com/img/app/shopmedia/production/6/6-25-11661.jpg?w=703&auto=format,compress',
    }, {
        id: 4,
        url: 'https://images.bestsellerclothing.in/live/image/catalog/brandstore/veromoda/banners/1_1920x650-d.jpg?width=1920&height=650&mode=fill&fill=blur&format=auto',
    }
]
const Photo = ({ props }) => {
    return (

        <Image source={{ uri: props.url }} className="rounded-lg" style={styles.container} resizeMode="stretch" />


    )
}

const Carosuel = () => {
    return (
        <View className="w-full h-[28%]">

            <FlatList data={data} renderItem={({ item }) => <Photo props={item} />}
                horizontal
                className="w-11/12 mx-auto h-full text-center"
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
            />
        </View>
    )
}

export default Carosuel;
const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: width * 0.91677,
        marginRight: 10,

    }
});
