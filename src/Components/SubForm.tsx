import React from 'react'
import { useState } from 'react'

const SubForm = () => {
  const [input, setValue] = useState('')
  const [name, setName] = useState('Larry')

  const handleInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setValue(event.target.value);
  }
  const updateName = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setName(input)
    setValue('')
  }

  return (
    <div className='w-full text-center space-y-5 py-10 bg-yellow-500 font-mono'>
      <h1 className='font-bold text-xl uppercase'>Hello {`"${name}"`} </h1>
      <form className="bg-purple-100 mx-5 rounded-full border-2 border-black">
        <div className="py-5">
          <label className='italic text-black' >Update Name Feild</label>
          <div className="py-5">
            <input
              type="text"
              value={input}
              name="name-1"
              onChange={handleInput}
              className="input"
            />
          </div>
        </div>
        <div >
          <div >
            <button onClick={updateName} >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubForm