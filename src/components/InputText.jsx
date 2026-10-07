/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {

const [username, setUserName] = useState("");



  return (
    <View>
      <Text>InputText</Text>
      <Text>UserName : {username}</Text>

     <TextInput style={{fontsize: 30, borderWidth: 2, borderColor: "green", margin: 20}} value={username} placeholder='Enter..' onChangeText={(value)=>setUserName(value)}/>
<Button title="clear" onPress={()=>setUserName('')}/>
    </View>
  )
}

export default InputText;