import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

import Dialog from './components/Dialog';

import TodoList from './components/TodoList';

export default function App() {
  const [dialogVisible, setDialogVisible] = useState(false)

  const [todoList, setTodoList] = useState([])

  const newTodoHandler = () => {
    setDialogVisible(true)
  }

  const closeDialogHandler = () => {
    setDialogVisible(false)
  }

  const markDone = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button title="Add New Todo" onPress={newTodoHandler}/>
      </View>
      <View>
        <TodoList todos={todoList} setTodoList={setTodoList} markDone={markDone}/>
      </View>
      {dialogVisible && <Dialog visible={dialogVisible} closeHandler={closeDialogHandler} setTodoList={setTodoList}/> }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#fadb01',
  },
  addButton: {
    marginBottom: 24,
  }
});
