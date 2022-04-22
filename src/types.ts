import { ChangeEvent, FormEvent } from 'react'

export type Todo = {
  id: string
  task: string
  isCompleted: boolean
  
}

export type TodoProps = {
  todoItems: []
  todo: Todo
  handleCheckTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}

export type AddTodoProps = {
  task: string
  handleSubmitTodo: (e: FormEvent) => void
  handleChange: (e: ChangeEvent) => void
}

export type PropType = {
  id: string
  name: string
  url: string
  urlPoint: string
  image: object
  items: string
  todoItems: {}
  gifs: []
  point: string
  children: React.ReactNode
 
}
