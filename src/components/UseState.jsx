import { View, Text, Button } from 'react-native';
import { useState } from 'react';

const UseState = () => {

  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>UseState</Text>
      <Text>Count: {count}</Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

export default UseState;