import { View, Text, Image, } from 'react-native';
import React, { useState, useEffect } from 'react';

const Sale = () => {
    const [seconds, setSeconds] = useState(60);
    const [hours, setHours] = useState(4);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);

            if (seconds <= 0) {
                setSeconds(seconds + 60);
                setHours(hours => hours - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <View>
            <Text>Sale ends in {hours} {seconds}</Text>
        </View>
    )
}

export default Sale