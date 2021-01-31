import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';

const ToDoInput = props => {

    const [InputToDo, SetToDo] = useState('');

    const InputToDoHandler = (Input) => {
        SetToDo(Input);
      }

      const ClearTextField = () => {
        SetToDo('');
      }

    return (
<View style={styles.container}>
    <TextInput 
     style={{width: '70%', borderBottomColor: 'black', borderBottomWidth: 1}} 
placeholder="Enter some data..."
     onChangeText = {InputToDoHandler}
     value = {InputToDo}
     />
     {/* () => props.AddToDo(data) */}
          {/* () => props.AddToDo.bind(this, InputToDo) */}
             <Button title="Add +" onPress={() => {props.AddToDo(InputToDo); ClearTextField()}}/>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom:15
    }
});

export default ToDoInput;