import SubTodos from '../SubForm/SubTodos'
import React from 'react'
import { useState } from 'react'

const SubButton = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="mx-auto h-full w-full cursor-pointer  space-y-5 py-7 text-center font-mono font-bold uppercase italic tracking-wider flex-row">
      <button
        className="rounded-full border-2 bg-cyan-500 px-3 py-1 text-xl font-bold"
        onClick={() => setShow(!show)}
      >
        {show ? '-' : '+'}
      </button>
      <div className="mx-auto w-full  rounded-xl   border-2 bg-cyan-500 p-3">
        {show && (
          <div>
           <SubTodos/>
          </div>
        )}
      </div>
    </div>
  )
}

export default SubButton
