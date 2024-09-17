import Input from "../components/Input";
import Button from "../components/Button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import {taskList} from "../context/atoms";
const CreateTask = () => {
    const setTaskList = useSetRecoilState(taskList);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length == 0 || description.length == 0) {
            setError("Fill all the fields")
            return;
        }
        const newTask = {
          id: uuidv4(),
          title: title,
          description: description,
          isCompleted: false,
          time: new Date().toDateString(),
          isUpdated: false,
        };
      //adding task to the tasklist atom
      setTaskList((oldtasklist) => [...oldtasklist, newTask]);
      navigate("/")
    }
  return (
    <div className="flex  flex-col justify-center items-center">
      <div className="mt-4 mb-2 text-center">
        <h1 className="font-bold text-xl">Create the task</h1>
      </div>
      <div className="text-center">
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <Input onChange={(e)=>setTitle(e.target.value)} title="Enter the task" placeholder="Running, Hit the Gym"/>
          <Input onChange={(e)=>setDescription(e.target.value)} title="Description" placeholder="Run for 2 kms"/>
                  <Button type="submit " title="Add task"></Button>
                  {error ? <p className="text-red-500 text-sm font-sans font-medium">{error}</p>:""}
        </form>
      </div>
    </div>
  );
}

export default CreateTask