import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { AppTextBold } from '../components/ui/AppTextBold'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { AppButton } from '../components/ui/AppButton'
import { AddModal } from '../components/AddModal'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false)

  const saveHandler = (title) => {
    onSave(todo.id, title)
    setModal(false)
  }
  return (
    <View>
      <AddModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      ></AddModal>

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title} </AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20}></FontAwesome>
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
            <AntDesign name='back' size={20} color='#fff'></AntDesign>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          >
            <FontAwesome name='remove' size={20}></FontAwesome>
          </AppButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: Dimensions.get('window').width / 3,
    //width: Dimensions.get('window').width > 400 ? 150 : 120,
  },

  title: {
    fontSize: 20,
  },
})
