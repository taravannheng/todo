import { View, Text, StyleSheet } from 'react-native'

function TodoItem() {
  return (
    <>
      <View style={styles.todoItem}>
        <Text>Item</Text>
      </View>
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