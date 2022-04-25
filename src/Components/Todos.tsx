import React, { ChangeEvent, FormEvent, useState } from 'react'
const { v4: uuidv4 } = require('uuid')

import { Row } from '../Components/Row'
import { data } from '../todos'
import { AddTodo } from './AddTodo'
import { Todo } from '../types'
import Image from 'next/image'
import { allImages } from '../todos'
import Footer from './Footer'
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
    <div className=" h-screen w-full  flex-1 px-6">
      <section className="mx-auto  max-w-5xl items-center ">
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
            handleCheckTodo={handleCheckTodo}
            todoItems={[]}
          />
        ))}
        {!hasTodos && (
          <div>
            <p className="text-mono text-shadow mb-5 text-center font-mono  text-2xl font-bold uppercase tracking-widest text-white">
              Set Your Todo!
            </p>
            {}
            <div className="relative mx-auto mt-40 h-96 w-full flex-1  cursor-pointer rounded-full bg-teal-400 shadow-xl shadow-teal-400 ring-white sm:h-96 sm:w-96  sm:ring-4">
              <Image
                src="https://media.graphassets.com/QUGSOG7RQpSVx3KFJXFc"
                layout="fill"
                alt="jack black in nacho libre smiling"
                className="absolute rounded-full border-4 border-white bg-teal-400 object-cover"
              />
              {/* <Image src={allImages[7].url} layout='fill' alt='' className='absolute hover:hidden hover:rounded-full border-4 border-white' /> */}
              <p className="absolute bottom-0 w-full pb-5 text-center text-2xl text-white">
                #Nacho
              </p>
            </div>
          </div>
        )}
        {hasTodos && (
          <p className="py-10 text-white">
            [{remainingTodos} of {todosLength}] todos remaining
          </p>
        )}
      </section>
      <Footer />
    </div>
  )
}
