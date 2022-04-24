import React, { ChangeEvent, FormEvent, useState } from 'react'
const { v4: uuidv4 } = require('uuid')

import { Row } from '../Components/Row'
import { data } from '../todos'
import { AddTodo } from './AddTodo'
import { Todo } from '../types'
import Image from 'next/image'
import {allImages} from '../todos'
export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data)
  const [task, setTask] = useState('')
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
    setTask('')
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
    <div className=' w-full flex-1  h-screen px-6'>
          <section className="mx-auto  items-center max-w-5xl ">
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
        <div>
           <p className="text-mono mb-5 text-2xl font-mono tracking-widest  text-center font-bold uppercase text-white text-shadow">
          Set Your Todo!
        </p>
        {}
        <div className='w-96 h-96  relative mx-auto ring-4 ring-white shadow-xl shadow-teal-400 rounded-full bg-teal-400  cursor-pointer'>
           <Image src={allImages[8].url} layout='fill' alt='' className='absolute hidden hover:flex  rounded-full bg-teal-400 border-4 border-white' />
           {/* <Image src={allImages[7].url} layout='fill' alt='' className='absolute hover:hidden hover:rounded-full border-4 border-white' /> */}
        </div>

       
        </div>
       
      )}
      {hasTodos && (
        <p className="py-10 text-white">
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
    </div>

  )
}
