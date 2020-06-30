import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
  //   const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
  const { todoId } = useContext(ScreenContext)

  //const [todoId, setTodoId] = useState(null)
  //   const [todos, setTodos] = useState([])

  //   let content = <MainScreen />

  //   if (todoId) {
  //     const selectedTodo = todos.find((todo) => todo.id === todoId)
  //     content = <TodoScreen />
  //   }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        {/* {content} */}
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
})
