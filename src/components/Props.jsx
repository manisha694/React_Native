/* eslint-disable react-native/no-inline-styles */
import { View, Text , Button} from 'react-native'
import React, {useState} from 'react'
import Child from './Child';
const Props = () => {
const [count, setCount] = useState(0);
const [items, setItems] = useState(10);


  return (
    <View>
      <Text style={{ fontsize: 30}}>Props</Text>
            <Button title= "Counter" onPress={() => setCount(count + 1)} />
            <Button title= "Items" onPress={() => setItems(items * 10)} />

      <Child data={count} items={items}/>

    </View>
  )
}

export default Props;