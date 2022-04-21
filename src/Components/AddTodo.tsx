import { AddTodoProps } from '../types'


export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="flex w-full justify-between" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="task"
      value={task}
      className="text-grey-dark mr-2 flex-1 rounded p-2 shadow"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
      <h1>+</h1>
    </button>
  </form>
)
