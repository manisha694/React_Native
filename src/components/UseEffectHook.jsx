/* eslint-disable react-native/no-inline-styles */
import { View, Text ,Button } from 'react-native'
import React, {useEffect, useState} from 'react';


const UseEffectHook = () => {
const [count, setCount] = useState(0);




console.log("hello");
useEffect(() => {
    console.log("This is useEffect Hook");

}, []);

  return (
    <View>
      <Text style={{ fontSize: 30}}>UseEffectHook</Text>
            <Text style={{ fontSize: 30}}>Count: {count}</Text>

            <Button title="Counter" onPress={()=> setCount(count + 1)}/>

    </View>
  )
}

export default UseEffectHook;