import { TodoProps } from '../types'
import { useState } from 'react'
import SubButton from './SubForm/SubButton'

export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div
    className={`
         mb-2 flex w-full items-center justify-between p-4 my-10
       ${
         isCompleted
           ? 'bg-gray-400 '
           : 'bg-opacity-80 border-4 border-white shadow-black shadow-xl bg-purple-500 '
       }
      `}
  >
    <p
      className={`
          ml-2 font-sans text-xl font-medium
          ${isCompleted ? 'text-white line-through' : 'white'}
        `}
    >
      {task}
    </p>{' '}
    <SubButton />
    <div className=" flex-row flex items-center justify-between space-x-2">
      <button
        aria-label="Delete a todo"
        className="flex h-7 w-7 items-center justify-center rounded bg-red-400 px-3 font-bold text-white  hover:bg-red-500"
        onClick={() => handleDeleteTodo(id)}
      >
        x
      </button>

      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="form-checkbox h-7 w-7"
      />
    </div>
  </div>
)
