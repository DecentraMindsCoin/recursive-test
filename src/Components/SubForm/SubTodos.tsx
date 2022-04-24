import React, { ChangeEvent, FormEvent, useState } from "react"
const { v4: uuidv4 } = require('uuid');

import { Row } from "../../Components/Row"
import { data } from "../../todos"
import { AddTodo } from "./../AddTodo"
import { Todo } from "../../types"

const SubTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(data)
  const [task, setTask] = useState("")
  const todosLength = todos.length
  const hasTodos = todos.length > 0
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTask("")
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    }
    task && handleAddTodo(todo)
  }

  return (
    <section className="scale-90 flex items-center mx-auto flex-col">
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckTodo={handleCheckTodo} todoItems={[]}        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl  text-white uppercase font-bold text-mono">
          Set Your Todo!
        </p>
      )}
      {hasTodos && (
        <p className="text-white pt-10 text-xs">
          [{remainingTodos} of {todosLength}] subtodos remaining
        </p>
      )}
    </section>
  )
}
export default SubTodos