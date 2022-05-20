import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

function TodoInput() {
  const [todo, setTodo] = useState('')

  const handleTextChange = (val) => {
    setTodo(val)
  }

  return (
    <>
      <View style={styles.textInput}>
        <TextInput placeholder='Add new to do' value={todo} onChangeText={handleTextChange}/>
      </View>
    </>
  )
}

export default TodoInput

const styles = StyleSheet.create({
  textInput: {
    justifyContent: 'center',
    height: 40,
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,

    backgroundColor: '#fff',
  }
})