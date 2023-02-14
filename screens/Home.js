import { View, Text, ScrollView, Image, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Carosuel from '../components/Carosuel';
import ItemsSlider from '../components/ItemsSlider';
import Brands from '../components/Brands';


{/**Navbar(15%),Searchbar(7%),  */ }

const Home = () => {
    return (
        <View className="h-full">

            <Navbar />
            <Searchbar />
            <ScrollView className="h-[78%] bg-gray-500" showsHorizontalScrollIndicator={false}>
                <ItemsSlider />
                {/* <Carosuel /> */}
                {/* <ItemsSlider />*/}
                {/*Top Brands */}
                {/*Sale */}
                {/**New Launch */}
                {/*Categories Selection */}
                {/**Items you may like */}
                <Brands />
            </ScrollView>





            {/* <Image source={{ uri: 'https://imagescdn.vanheusenindia.com/img/app/shopmedia/production/6/6-25-11661.jpg?w=1473&auto=format,compress' }} resizeMode="stretch" className="w-11/12 mx-auto h-32  " /> */}
            {/**Top Categories,Brands */}

        </View>
    )
}

export default Home;