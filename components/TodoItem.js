import { View, Text, Pressable, StyleSheet } from 'react-native'

function TodoItem({ todo, markDone }) {

  

  return (
    <>
      <Pressable onPress={markDone.bind(this, todo.id)}>
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