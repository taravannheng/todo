import { View, FlatList, StyleSheet } from 'react-native'

import TodoItem from './TodoItem'

function TodoList({ todos, markDone }) {
  const renderItem = ({ item }) => {
    return <TodoItem todo={item} markDone={markDone}/>
  }

  return (
    <>
      <View style={styles.todoList}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  )
}

export default TodoList

const styles = StyleSheet.create({
  todoList: {
    height: 400,
  }
})