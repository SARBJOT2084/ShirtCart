import { View, Text, ScrollView, Image, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Carosuel from '../components/Carosuel';


{/**Navbar(15%),Searchbar(7%),  */ }

const Home = () => {
    return (
        <KeyboardAvoidingView className="h-full">

            <Navbar />
            <Searchbar />
                    <Carosuel />

            



            {/* <Image source={{ uri: 'https://imagescdn.vanheusenindia.com/img/app/shopmedia/production/6/6-25-11661.jpg?w=1473&auto=format,compress' }} resizeMode="stretch" className="w-11/12 mx-auto h-32  " /> */}
        </KeyboardAvoidingView>
    )
}

export default Home