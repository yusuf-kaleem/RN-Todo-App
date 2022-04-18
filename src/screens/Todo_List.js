import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Strings from "../constants/constant";
import Task from '../components/Task/Task';
import Button from "../components/Button/Button";

import {add_task,remove_task} from "../../redux/actions/taskAction";

export default function App() {
  const [task, setTask] = useState();
  const state = useSelector((state) => state.items)
  const dispatch = useDispatch()

  const handleAddTask = () => {
    Keyboard.dismiss();
    dispatch(add_task(task)) 
    setTask(null);
  }

  const completeTask = (index) => {
    dispatch(remove_task(index)) 
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>{Strings.title.app_Name}</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            state.tasks.map((item, index) => {
              return (
                <View key={index}  >
                  <Task text={item} completeTask={()=>{completeTask(index)}}  /> 
                </View>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={Strings.input.input_task_placholder} value={task} onChangeText={text => setTask(text)} />
       
        <Button title={Strings.button.add} onPress={handleAddTask} customeStyle={styles.buttonStyle}></Button>

      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  buttonStyle: {
    width: 60,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {},
});
