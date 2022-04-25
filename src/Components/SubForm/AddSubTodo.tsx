import { AddTodoProps } from '../../types'

const AddSubTodo = ({ handleSubmitTodo, task, handleChange }: AddTodoProps) => (
  <div className=" w-full">

    <form className="flex w-full justify-between" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="mr-2 flex-1 rounded p-2 text-gray-700 shadow-lg shadow-teal-400"
        onChange={handleChange}
      />
      <button type="submit" aria-label="Add todo">
        <h1 className="rounded-full border-2 bg-image-2 px-3 py-1 ">
          +
        </h1>
      </button>
    </form>
  </div>
)
export default AddSubTodo
