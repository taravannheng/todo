import { View, Text, Pressable, StyleSheet } from 'react-native'

function TodoItem({ todo, setTodoList, todos }) {

  const markDone = () => {
    setTodoList(todos.filter(todoItem => todo.id !== todoItem.id))
  }

  return (
    <>
      <Pressable onPress={markDone}>
        <View style={styles.todoItem}>
          <Text>{todo.text}</Text>
        </View>
      </Pressable>
    </>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  todoItem: {
    justifyContent: 'center',
    height: 40,
    padding: 8,
    marginHorizontal: 16,
    marginBottom: 8,

    backgroundColor: '#fff',

    borderRadius: 8,
  }
})