import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

const ToDoItem = props => {

    const OnToDoItemTap = (todo, i) => {

        Alert.alert(
          "Alert Dialog",
          todo + " - " + i + " " + "Deleted!",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
    
      }

    return (
        <View style={styles.ToDoList}><View style={styles.ToDoListItem} ><Text onPress={() => {props.RemoveToDo(props.index); OnToDoItemTap(props.value,props.index)}} style={{color: 'white'}}> {props.value + " - " + props.index} </Text></View></View>
    );
};

const styles = StyleSheet.create({
    ToDoList: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center',marginBottom:5
    },
    ToDoListItem: {backgroundColor: 'grey', width: '80%', padding: 15, marginBottom: 5, alignItems: 'center', justifyContent: 'center', borderRadius:15}
  });
  
export default ToDoItem;