import {Button, StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';

const CounterScreen =() => {
    
const [counter, setCounter] = useState(0);

const increase = () => {
    setCounter(counter + 1)
}
const decrease = () => {
    setCounter(counter - 1)
}

    
    return (
        <View>
            <Button title='Increase' onPress={increase} ></Button>
            <Button title='Decrease'onPress={decrease} ></Button>
            <Text>Current Count: {counter}</Text>
        </View>
    )
};

const styles= StyleSheet.create({});

export default CounterScreen;

