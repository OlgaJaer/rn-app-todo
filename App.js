import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    { id: '1', title: 'buy food' },
    {
      id: '2',
      title: 'clean floor',
    },
  ])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    //setTodos(todos.concat([newTodo]))

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ])
  }

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id)
    Alert.alert(
      'Delete item',
      `Are you sure you want to delete "${todo.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
          },
        },
      ],
      { cancelable: false }
    )
  }

  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title
        }
        return todo
      })
    )
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    )
  }
  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        {content}
        {/* <View>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id}></Todo>
          ))}
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})
