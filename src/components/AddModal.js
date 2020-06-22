import React, { useState } from 'react'
import { View, StyleSheet, Button, TextInput, Modal, Alert } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const AddModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Error',
        `Minimum length is 3 charaters. Now is ${title.trim().length}. `
      )
    } else {
      onSave(title)
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle} // ??
          style={styles.input}
          placeholder='Введите название'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.bottoms}>
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
            <MaterialIcons name='cancel' size={20}></MaterialIcons>
          </AppButton>
          <AppButton onPress={saveHandler}>
            <FontAwesome name='save' size={20}></FontAwesome>
          </AppButton>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  bottoms: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
