import { View, Text } from 'react-native'
import {useState} from 'react'
const UseState = () => {


  const [count, setCount] = useState("fraz");


  return (
    <View>
      <Text>UseState</Text>
      <Text>count: {count}</Text>
      Button
    </View>
  )
}

export default UseState;


