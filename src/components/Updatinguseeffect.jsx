/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native'
import React ,{useState, useEffect} from 'react'

const Updatinguseeffect = () => {

const [counter, setCounter] = useState(0);

const [score, setScore] = useState(20);

useEffect(() => {
    console.log("I'm a useEffect Hook");
},[counter, score]);



  return (
    <View>
      <Text style={{fontSize:30 , marginBottom: 10}}>Updatinguseeffect</Text>
            <Text style={{fontSize:30 , marginBottom: 10}}>Counter: {counter}</Text>
                  <Text style={{fontSize:30 , marginBottom: 10}}>Score: {score}</Text>
                  <Button title="Counter" onPress={()=> setCounter(counter + 1)} />
                  <Button  title="SCORE" onPress={()=> setScore(score + 1)} />



<InfoDetails count ={counter} points={score}/>
    </View>
  )
};



const InfoDetails = ({count , points}) => {
    return (
        <View>
            <Text style={{fontSize:30 , marginBottom: 10}}>Info Details </Text>

                        <Text style={{fontSize:30 , marginBottom: 10}}>Count: {counter} </Text>


            <Text style={{fontSize:30 , marginBottom: 10}}>Info Details </Text>

        </View>
    )
};

export default Updatinguseeffect