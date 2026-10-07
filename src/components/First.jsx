import { View, Text, Button } from 'react-native'
import React from 'react'

const First = () => {

const getName = (name) => {

 console.warn("Name: " ,name)
}

  return (
    <View>
      <Text>First</Text>

<Button title="Press me" onPress={() => console.log(getName("fraz"))} />   


    </View>
  )
}

export default First