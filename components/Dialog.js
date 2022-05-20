import { Modal, Text, View, StyleSheet } from 'react-native'

function Dialog({ visible }) {
  return (
    <>
      <View>
        <Modal animationType='slide' visible={visible}>
          <View style={styles.dialog}>
            <Text>Modal</Text>
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
    alignItems: 'center',
    backgroundColor: '#fadb01'
  }
})