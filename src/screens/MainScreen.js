import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
  ) //?

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
      setDeviceWidth(width)
    }

    Dimensions.addEventListener('change', update)

    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}></Todo>
        )}
      />
    </View>
  )
  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require('../../assets/no-items.png')}
        ></Image>
      </View>
    )
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 200,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
})
