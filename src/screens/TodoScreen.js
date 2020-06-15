import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
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
        <Text style={styles.title}>{todo.title} </Text>
        <Button title='Edit' onPress={() => setModal(true)}></Button>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='Back'
            color={THEME.GREY_COLOR}
            onPress={goBack}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title='Delete'
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          ></Button>
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
    width: '45%',
  },

  title: {
    fontSize: 20,
  },
})
