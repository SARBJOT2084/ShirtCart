import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');
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
        url: 'https://lp2.hm.com/hmgoepprod?set=width[1440],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/global_campaigns/season_07/ladies/1047h/1047H-3x2-new-season-edit.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]',

    }
]
const Photo = ({ props }) => {
    return (
        <View className="h-[20%] my-auto w-full">
            <Image source={{ uri: props.url }} className="h-full w-full" />
        </View>
    )
}


const Carosuel = () => {
    return (
        <View className="w-full h-full">

            <FlatList data={data} renderItem={({ item }) => <Photo props={item} />}
                className="w-full h-full"
            />
        </View>
    )
}

export default Carosuel;
const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    }
});
