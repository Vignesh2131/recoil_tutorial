import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {taskList} from "../context/atoms";
const UpdateTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useRecoilState(taskList);
  const { id } = useParams();
  const index = tasks.findIndex((task) => task.id == id);
  const findtask = tasks.find((task) => task.id == id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length == 0 || description.length == 0) {
      setError("Fill all the fields")
      return;
    } 
    console.log(status)
    const updatedTask = {
      ...findtask,
      title: title,
      description:description,
      isUpdated: true,
      isCompleted:status=="Completed"?true:false,
      time: new Date().toISOString().slice(0, 10),
    };
    const newList = replaceItemAtIndex(tasks, index, updatedTask);
    setTasks(newList);
    navigate("/");
  }

  const replaceItemAtIndex = (tasks, index, updatedTask) =>{
    return [...tasks.slice(0, index), updatedTask, ...tasks.slice(index + 1)];
  }


  return (
    <div className="">
      <div className="flex  flex-col justify-center items-center">
        <div className="mt-4 mb-2 text-center">
          <h1 className="font-bold text-xl">Update the task</h1>
        </div>
        <div className="text-center">
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Input
              onChange={(e) => setTitle(e.target.value)}
              title="What's the change"
              placeholder={findtask.title}
            />
            <Input
              onChange={(e) => setDescription(e.target.value)}
              title="Description"
              placeholder={findtask.description}
            />
            <div>
              <label htmlFor="status" className="font-medium">
                Status:{" "}
              </label>
              <select
                onChange={(e) => setStatus(e.target.value)}
                className="text-base mb-4"
                name="status"
              >
                <option className="text-base" value="Pending">
                  Pending
                </option>
                <option className="text-base" value="Completed">
                  Completed
                </option>
              </select>
            </div>
            <Button type="submit" title="Add task"></Button>
            {error ? (
              <p className="text-red-500 text-sm font-sans font-medium">
                {error}
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTask