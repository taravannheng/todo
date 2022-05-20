import { useState } from 'react'
import { Modal, View, StyleSheet, Button } from 'react-native'

import TodoInput from './TodoInput'

function Dialog({ visible, closeHandler, todoHandler }) {
  return (
    <>
      <View>
        <Modal animationType='slide' visible={visible}>
          <View style={styles.dialog}>
            <TodoInput />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Cancel' onPress={closeHandler} />
              </View>
              <View style={styles.button}>
                <Button title='Add'/>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  )
}

export default Dialog

const styles = StyleSheet.create({
  dialog: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#fadb01'
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 24,
  }
})