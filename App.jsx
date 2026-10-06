
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const App = () => {

const handlePress=()=>{
  Alert.alert('Button Pressed');
}

  return (
    <View>
      <Text style={{ fontSize: 30 }}>App</Text>
            <Text style={{ fontSize: 30 }}>Manisha</Text>
<Button title="Press Me" onPress={handlePress} />
    </View>
  )
}

export default App;