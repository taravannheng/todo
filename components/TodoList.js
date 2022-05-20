import { View, FlatList } from 'react-native'

import TodoItem from './TodoItem'

function TodoList({ todos }) {
  const renderItem = ({ item }) => {
    return <TodoItem todo={item.text} />
  }

  return (
    <>
      <View>
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