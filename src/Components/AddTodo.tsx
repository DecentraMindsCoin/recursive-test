import { AddTodoProps } from '../types'

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <div className=' w-full'>
    {' '}
    <h1 className="text-center py-10 text-3xl font-bold font-mono">The Awesome Todo App...</h1>
    <form className="flex w-full justify-between" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="text-grey-dark mr-2 flex-1 rounded p-2 shadow-lg shadow-black"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo">
        <h1 className="rounded-full border-2 px-3 py-1 shadow-lg shadow-black">
          +
        </h1>
      </button>
    </form>
  </div>
)
