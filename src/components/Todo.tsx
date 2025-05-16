import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Todo(props: {id: string; name: string; completed: boolean; toggleTaskCompleted: (id: string) => void; deleteTask: (id: string) => void}) {
  return (
    <li>
      <label>
        <input
          className="mt-3"
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <span className="ml-2" />
        {props.name}
      </label>
      <button onClick={() => props.deleteTask(props.id)} className="ml-4 ">
        <FontAwesomeIcon icon={faTrashCan} />
        <span className="hidden"> {props.name} </span>
      </button>
    </li>
  );
}

export default Todo;
