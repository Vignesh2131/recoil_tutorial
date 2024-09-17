import { useRecoilValue } from "recoil";
import {taskList} from "../context/atoms";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const CompletedTask = () => {
    const tasks = useRecoilValue(taskList);
    console.log(tasks)
    const completedTasks = tasks.filter((task) => task.isCompleted == true);
  return (
    <main className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-3">Completed tasks</h1>
      </div>
      <div className="tasks">
        {completedTasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </main>
  );
}

export default CompletedTask