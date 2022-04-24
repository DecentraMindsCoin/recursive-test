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
         mb-2 flex-1 w-full uppercase items-center justify-between p-4 my-10  
       ${
         isCompleted
           ? 'bg-gray-400 '
           : 'bg-opacity-60  shadow-teal-300 shadow-lg  bg-purple-500 hover:bg-awesome-image-3 py-10'
       }
      `}
  >
    <div
      className={`
          ml-2 font-sans text-sm font-medium  px-2 border-2 rounded-2xl bg-awesome-image-2 text-black text-center  italic mr-5 py-2  
          ${isCompleted ? ' line-through' : 'white'}
        `}
    >
   <p className='font-extrabold'>I Must... <span className='text-black'> {task}</span>
     </p> 
    </div>
    <SubButton />
    <div className=" flex-row flex items-center justify-between space-x-2 ">
      <button
        aria-label="Delete a todo"
        className="flex h-7 w-7 items-center justify-center rounded bg-red-500 px-3 font-bold text-white hover:text-black  hover:bg-white"
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
