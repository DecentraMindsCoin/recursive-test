import { AddTodoProps } from '../../types'

 const AddSubTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <div className=' w-full'>
    {' '}
    <h1 className="text-center py-10 text-3xl font-bold font-mono uppercase text-white">The Awesome Todo App...</h1>
    <form className="flex w-full justify-between" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="text-gray-700 mr-2 flex-1 rounded p-2 shadow-lg shadow-cyan-500"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo">
        <h1 className="rounded-full border-2 px-3 py-1 shadow-lg shadow-black bg-cyan-500">
          +
        </h1>
      </button>
    </form>
  </div>
)
export default AddSubTodo