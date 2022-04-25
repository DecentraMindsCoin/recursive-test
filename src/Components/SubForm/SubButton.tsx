import SubTodos from '../SubForm/SubTodos'
import React from 'react'
import { useState } from 'react'

const SubButton = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="mx-auto h-full w-full cursor-pointer flex-row  space-y-5 py-7 text-center font-mono font-bold uppercase italic tracking-wider">
      <button
        className={`${
          show ? ' bg-awesome-image-3 ' : 'bg-awesome-image-2'
        } rounded-full border-2 bg-awesome-image-2 px-3 py-1 text-xl font-bold text-black`}
        onClick={() => setShow(!show)}
      >
        {show ? '-' : '+'}
      </button>
      <div className="mx-auto w-full  bg-transparent bg-opacity-90 p-3">
        {show && (
          <div className="">
            <SubTodos />
          </div>
        )}
      </div>
    </div>
  )
}

export default SubButton
