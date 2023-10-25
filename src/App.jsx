import { useState } from "react";

// todoApp

const App = () => {
  let todoData = [];
  const [todo, setTodo] = useState(todoData);
  const [inputValue, setInputValue] = useState("");
  const [InputEmpty, setInputEmpty] = useState("");
  // add todo
  const addTodo = () => {
    setInputEmpty("");
    !inputValue
      ? setInputEmpty("please enter todo")
      : setTodo([
          ...todo,
          {
            id: Math.random().toString(16).slice(2),
            todo: inputValue,
          },
        ]);
    setInputValue("");
  };
  // delete
  const delTodo = (id) => {
    setTodo(
      todo.toSpliced(
        todo.findIndex((t) => t.id === id),
        1
      )
    );
  };
  // edit todo
  const editTodo = (id, prevTodo) => {
    let update = prompt("update value");

    !update
      ? setTodo(
          todo.toSpliced(
            todo.findIndex((t) => t.id === id),
            1,
            {
              id: id,
              todo: prevTodo,
            }
          )
        )
      : setTodo(
          todo.toSpliced(
            todo.findIndex((t) => t.id === id),
            1,
            {
              id: id,
              todo: update,
            }
          )
        );
  };
  // delete all
  const dellAll = () => {
    setTodo([]);
  };

  return (
    <div className="container mt-3">
      <section className="bg-primary p-3 rounded w-50 m-auto">
        {/* delete All Button */}
        <div className="text-center my-2">
          <button onClick={dellAll} className="btn btn-secondary rounded-5">
            Delete All
          </button>
        </div>
        {/* input and add todo button */}
        <div className="d-flex justify-content-between">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="rounded-5 ps-3"
            placeholder="enter todo"
          />
          <button onClick={addTodo} className="btn btn-secondary rounded-5">
            Add Todo
          </button>
        </div>
        {/* input empty warning */}
        <div>
          <p className="text-warning ms-5">{InputEmpty}</p>
        </div>
        {/* ul start */}
        <ul className="list-unstyled">
          {todo.map((e, i) => (
            <li key={e.id} className="bg-success p-2 rounded-2 mt-2 d-flex justify-content-between">
              {/* todo value */}
              <p>{e.todo}</p>
              {/* delete and edit todo todo button */}
              <div>
                <button className="btn btn-secondary me-2" onClick={() => delTodo(e.id)}>
                  Del
                </button>
                <button className="btn btn-secondary" onClick={() => editTodo(e.id, e.todo)}> 
                Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
