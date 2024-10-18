import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function FunctionalComponent({exampleVar='asdasdasd', buttonTitle='default'}) {
    const [count, setCount] = useState(1);
    const [onScreenTimer, setOnScreenTimer] = useState(0);
    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    useEffect(() => {
        const value = setInterval(() => setOnScreenTimer((onScreenTimer) => onScreenTimer + 1), 2000)
        return () => clearInterval(value);
    }, []);
    
    return (
        <View>
           <Text>Time on screen : {onScreenTimer}</Text>
           <Text>Counter: {count}</Text>
           <Button title={buttonTitle} onPress={increase}></Button>
           <Button title={buttonTitle} onPress={decrease}></Button>
        </View>
    );
}
