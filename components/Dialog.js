import { Modal, View, StyleSheet, TextInput, Button } from 'react-native'

function Dialog({ visible, closeHandler }) {
  return (
    <>
      <View>
        <Modal animationType='slide' visible={visible}>
          <View style={styles.dialog}>
            <View style={styles.textInput}>
              <TextInput placeholder='Add new todo'  />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Cancel' onPress={closeHandler} />
              </View>
              <View style={styles.button}>
                <Button title='Add' />
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
  textInput: {
    justifyContent: 'center',
    height: 40,
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,

    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 24,
  }
})