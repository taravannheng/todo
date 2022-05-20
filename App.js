import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

import Dialog from './components/Dialog';

export default function App() {
  const [dialogVisible, setDialogVisible] = useState(false)

  const newTodoHandler = () => {
    setDialogVisible(true)
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Todo" onPress={newTodoHandler}/>
      {dialogVisible && <Dialog visible={dialogVisible} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fadb01',
  },
});
