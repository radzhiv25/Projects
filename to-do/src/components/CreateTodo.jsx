import {useState} from "react";
import TodoList from "./TodoList";

const CreateTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }


  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <label htmlFor="">Enter title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="border p-2 outline-none rounded-md shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Enter description</label>
          <input
            type="text"
            name=""
            id=""
            value={inputValue}
            onChange={handleInput}
            placeholder="Enter Description"
            className="border p-2 outline-none rounded-md shadow-sm"
          />
        </div>
        <button className="p-2 border w-max mr-auto rounded-md font-bold text-white bg-gradient-to-br from-green-400 to-green-500" type="submit">Add todo</button>
      </form>

      <div className="">
        <TodoList inputValue={inputValue} />
      </div>
    </div>
  );
};

export default CreateTodo;
