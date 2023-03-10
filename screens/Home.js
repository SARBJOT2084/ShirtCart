import { View, Text, ScrollView, Image, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Carosuel from '../components/Carosuel';
import ItemsSlider from '../components/ItemsSlider';
import Brands from '../components/Brands';
import Sale from '../components/Sale';
import Recent from '../components/Recent';

{/**Navbar(15%),Searchbar(7%),  */ }

const Home = () => {
 

    return (
        <View className="h-full">

            <Navbar />
            <Searchbar />
            <ScrollView className="h-[78%]" showsVerticalScrollIndicator={false}>
                <ItemsSlider />
                <Carosuel />
                <Sale />
                <Brands />

                {/* <Recent /> */}
                {/**New Launch */}
                {/*Categories Selection */}
                {/**Items you may like */}
            
                
            </ScrollView>
            {/* <Image source={{ uri: 'https://imagescdn.vanheusenindia.com/img/app/shopmedia/production/6/6-25-11661.jpg?w=1473&auto=format,compress' }} resizeMode="stretch" className="w-11/12 mx-auto h-32  " /> */}
            {/**Top Categories,Brands */}
        </View>
    )
}

export default Home;