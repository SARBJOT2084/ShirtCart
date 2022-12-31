import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
function Box({ props }) {
    return (<View className="mx-3">
        <Image source={{ 'uri': props.img }} className="w-40 h-48 rounded-t-lg" />
        <Text className="rounded-b-lg bg-gray-300">{props.title}</Text>
    </View>)

}


const Product = () => {
    const casual = [{
        id: 1,
        img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        title: 'Men',
    }, {
        id: 2,
        img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
        title: 'Women',
    }
    ]

    const office = [{
        id: 1,
        img: 'https://media.istockphoto.com/id/1300966679/photo/young-handsome-man-in-classic-suit-over-the-lake-background.jpg?s=612x612&w=0&k=20&c=SiGc4kc1L8mK-LIGSuRzPj-UHtBY2ov5knFuzDy9hzc=',
        title: 'Men Office',
    }, {
        id: 2,
        img: 'https://media.istockphoto.com/id/1215420530/photo/fashion-woman-portrait-in-classic-suit-white-shirt-posing-near-chair-stylish-elegant-model.jpg?s=612x612&w=0&k=20&c=kjBhj0c13B4ezNr9kLFRUfeueuaDWl2rLWiH_SyPfxI=',
        title: 'Women Office',
    }]
    const kids = [{
        id: 1,
        img: 'https://images.unsplash.com/photo-1624029769501-5a6cfec0d9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Kids',
    }, {
        id: 2,
        img: 'https://media.istockphoto.com/id/184847535/photo/standing-young-man.jpg?b=1&s=170667a&w=0&k=20&c=PXrb8juonm2iENeFtffkfikx51AQLdQmUzHVfbyZslo=',
        title: 'Short',
    }]
    let [fontsLoaded] = useFonts({

        Pacifico_400Regular, Montserrat_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }
    {/**category section */ }
    return (

        <View className="mt-[30%]" >
            <Text style={{ marginRight: 'auto', marginLeft: 'auto', fontFamily: 'Pacifico_400Regular', fontSize: 34, marginBottom: 34, }}>Categories</Text>
            <ScrollView>
                <Text style={{ fontFamily: 'Montserrat_400Regular' }}>Casual</Text>
                <FlatList data={casual} renderItem={({ item }) => <Box props={item} />} horizontal className="mx-auto w-full my-5" showsHorizontalScrollIndicator={false} />
                <FlatList data={office} renderItem={({ item }) => <Box props={item} />} horizontal className="mx-auto w-full my-5" showsHorizontalScrollIndicator={false} />
                <FlatList data={office} renderItem={({ item }) => <Box props={item} />} horizontal className="mx-auto w-full my-5" showsHorizontalScrollIndicator={false} />

            </ScrollView>



            {/* <
            <FlatList /> */}
            {/* <FlatList data={category} renderItem={({ item }) => <Complete props={item} />} /> */}


        </View >
    )
}

export default Product