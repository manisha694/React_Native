/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native'
import React from 'react'
const Child = (props) => {
  console.log("CHILD RUNNING", props.data);

  return (
    <View>
      <Text>{props.data}</Text>
      <Text>{props.items}</Text>
    </View>
  );
};

export default Child;