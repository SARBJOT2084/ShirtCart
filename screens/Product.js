import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
// import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
function Box({ props }) {
    return (<View className="h-24 w-24">
        <Image source={{ 'uri': props.img }} className="w-14 h-14 " />
    </View>)
}
const Product = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
            title: 'Men',

        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
            title: 'Women',
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/id/1300966679/photo/young-handsome-man-in-classic-suit-over-the-lake-background.jpg?s=612x612&w=0&k=20&c=SiGc4kc1L8mK-LIGSuRzPj-UHtBY2ov5knFuzDy9hzc=',
            title: 'Men Office',

        },
        {
            id: 4,
            img: 'https://media.istockphoto.com/id/1215420530/photo/fashion-woman-portrait-in-classic-suit-white-shirt-posing-near-chair-stylish-elegant-model.jpg?s=612x612&w=0&k=20&c=kjBhj0c13B4ezNr9kLFRUfeueuaDWl2rLWiH_SyPfxI=',
            title: 'Women Office',
        }
    ]
    let [fontsLoaded] = useFonts({

        Pacifico_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="mt-[30%]">
            <Text style={{ marginRight: 'auto', marginLeft: 'auto', fontFamily: 'Pacifico_400Regular', fontSize: 34, }}>Categories</Text>
            {/* <FlatList data={data} renderItem={({ item }) => { <Box props={item} /> } /> */}


        </View>
    )
}

export default Product