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
         my-10 mb-2 w-full flex-1 items-center justify-between p-4 uppercase  
       ${
         isCompleted
           ? 'bg-gray-400 '
           : 'hover:bg-image  bg-violet-400 bg-opacity-60 py-10 shadow-lg shadow-teal-300 sm:bg-image-1 md:bg-image-2 lg:bg-image-3 xl:bg-image-4'
       }
      `}
  >
    <div
      className={`
          ml-2 mr-5 border-2 border-black  bg-black px-2 py-2 text-center font-sans  text-sm  font-medium italic  text-white shadow-xl shadow-teal-300  
          ${isCompleted ? ' line-through' : 'white'}
        `}
    >
      <p className="font-extrabold">
        I will... <span className="text-teal-300"> {task}</span>
      </p>
    </div>
    <SubButton />
    <div className=" flex flex-row items-center justify-between space-x-2 ">
      <button
        aria-label="Delete a todo"
        className="flex h-7 w-7 items-center justify-center rounded border-4 bg-red-500 px-3 font-bold text-white hover:bg-white  hover:text-black"
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
