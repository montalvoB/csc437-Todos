import Todo from "./components/Todo";
import Modal from "./components/Modal";
import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props: { tasks: { id: string; name: string; completed: boolean }[] }) {
  const [tasks, setTasks] = useState(props.tasks);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  function addTask(name: string) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    setIsOpen(false);
  }
  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  return (
    <main className="m-4">
      <button
        onClick={handleOpen}
        className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 focus:bg-blue-800 text-white"
      >
        Add Task
      </button>
      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>{taskList}</ul>
      </section>

      <Modal
        children={<AddTaskForm onNewTask={addTask} />}
        headerLabel="New Task"
        isModalOpen={isOpen}
        onCloseRequested={handleClose}
      />
    </main>
  );
}

export default App;
