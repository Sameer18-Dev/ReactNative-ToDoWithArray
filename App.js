import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, FlatList } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';


export default function App() {

  const [ToDoList, SetToDoList] = useState([]);


  const AddToDoHandler = ToDo => {
    // console.log(InputToDo);
    // [...ToDoList, InputToDo]

    SetToDoList(currentToDoList => [...currentToDoList, {key: ToDoList.length.toString(), value: ToDo}]);
    // Alert.alert(InputToDo);

  }

  const RemoveToDoHandler = ToDoID => {
    console.log(ToDoID);
    SetToDoList(currentToDoList => {
      return currentToDoList.filter((ToDo) => ToDo.key != ToDoID);
    });
  }

  return (
    <View style={{marginBottom:135}}>

  <Text style={{marginTop:30, marginBottom: 10, textAlign: 'center', fontSize: 30, fontStyle: 'italic', color: 'grey'}}>{"To Do List"}</Text>

  <StatusBar style="auto" />

<ToDoInput AddToDo={AddToDoHandler}/>

<FlatList 
data={ToDoList}
renderItem={todoItem => <ToDoItem RemoveToDo={RemoveToDoHandler} value={todoItem.item.value} index={todoItem.index}/>}
 />

  {/* <ScrollView>
  <View style={styles.ToDoList}>
    {ToDoList.map((todo, i) => <View style={styles.ToDoListItem} ><Text onPress={() => OnToDoItemTap(todo, i)} style={{color: 'white'}} key={i}> {todo + " - " + i} </Text></View>)}  
  </View>
  </ScrollView> */}

</View>
  );
}

