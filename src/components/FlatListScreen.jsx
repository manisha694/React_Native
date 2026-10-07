import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react';



const data = [ 
{ id: 1, title: 'Item 11'},
{ id: 3, title: 'Item 16'},

{ id: 2, title: 'Item 13'},

{ id: 6, title: 'Item 2'},

{ id: 8, title: 'Item 3'},

{ id: 13, title: 'Item 4'},

{ id: 15, title: 'Item 1'},

{ id: 55, title: 'Item 11'},
{ id: 53, title: 'Item 16'},

{ id: 24, title: 'Item 13'},

{ id: 46, title: 'Item 2'},

{ id: 28, title: 'Item 3'},

{ id: 23, title: 'Item 4'},

{ id: 25, title: 'Item 66'},


]


const FlatListScreen = () => {
const renderItem = ({ item}) => (
    <View style={styles.item}>
        <Text style={styles.title} >
            {item.title}
        </Text>
    </View>
)

  return (
    <View style={styles.container}>
      <FlatList data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
contentContainerStyle={styles.list}
/>
    </View>
  )
};

const styles = StyleSheet.create (
    {
        container: {
        
            backgroundColor: "green",
            paddingTop: 20,
            margin: 40,
            borderWidth: 2,
            borderColor: "red",
        },
        list: {
            paddingHorizontal: 30,
        },
        item : {
            backgroundColor: 'yellow',
            borderWidth: 5,
            marginVertical: 70,
            shadowColor:'green',
            shadowOffset: {
                width: 0,
                height: 2,
            },
shadowOpacity: 0.1,
elevation: 5,

        },

        title: {
            color: 'black'
            
        }
    }
)

export default FlatListScreen;