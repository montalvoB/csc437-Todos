import { useState } from "react";

function AddTaskForm(props: { onNewTask: (name: string) => void }) {
  const [name, setName] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;
    props.onNewTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo-input" />

      <input
        type="text"
        id="new-todo-input"
        placeholder="New task name"
        name="text"
        autoComplete="off"
        className="border-1 rounded-md p-2 mb-3 mr-2"
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={!name.trim()}
        className={`p-2 rounded-md  text-white ${
          name.trim()
            ? "bg-blue-500 hover:bg-blue-600 focus:bg-blue-800"
            : "bg-blue-300"
        }`}
      >
        Add task
      </button>
    </form>
  );
}

export default AddTaskForm;
