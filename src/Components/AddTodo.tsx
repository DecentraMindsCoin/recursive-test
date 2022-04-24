import { AddTodoProps } from '../types'

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <div className=' w-full'>
    {' '}
  
    <form className="flex w-full justify-between scale-90" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="text-gray-800 focus:border-transparent mx-2 flex-1 rounded-full  shadow-lg shadow-teal-400 focus:shadow-fuchsia-300 cursor-pointer"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo">
        <h1 className="rounded-full border-2 px-3 py-1 shadow-lg shadow-black bg-teal-400">
          +
        </h1>
      </button>
    </form>
  </div>
)
