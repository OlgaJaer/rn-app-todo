import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
      Keyboard.dismiss() // скрыть клавиатуру
    } else {
      Alert.alert('Name of tast can not be empty')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue} // =  {(text) => setValue(text)}
        value={value}
        placeholder='Add task name...'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <AntDesign.Button
        onPress={pressHandler}
        name='pluscircleo'
        // size={24}
        // color='black'
      >
        Add
      </AntDesign.Button>
      {/* <Button title='Add' onPress={pressHandler} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
  },
})
