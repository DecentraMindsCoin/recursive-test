import { AddTodoProps } from '../../types'

const AddSubTodo = ({ handleSubmitTodo, task, handleChange }: AddTodoProps) => (
  <div className=" w-full">
    {' '}
    {/* <h1 className="py-10 text-center font-mono text-3xl font-bold uppercase text-pink-500">
      The Awesome Todo App...
    </h1> */}
    <form className="flex w-full justify-between" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="mr-2 flex-1 rounded p-2 text-gray-700 shadow-lg shadow-cyan-500"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo">
        <h1 className="rounded-full border-2 bg-cyan-500 px-3 py-1 shadow-lg shadow-black">
          +
        </h1>
      </button>
    </form>
  </div>
)
export default AddSubTodo
