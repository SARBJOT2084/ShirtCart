import { View, Text, FlatList, Animated } from 'react-native'
import React, { useRef } from 'react'
import SlideItem from './SlideItem';
import Slides from './data';
import Pagination from './Pagination';

const Slider = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = event => {
        //Animated event 
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            },
        ]
            ,
            {
                useNativeDriver: false,
            }
        )(event);
    };
    return (
        <View>
            <FlatList data={Slides} renderItem={({ item }) => <SlideItem props={item} />}
                horizontal pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
            />
            <Pagination data={Slides} scrollX={scrollX} />
        </View>
    )
}

export default Slider