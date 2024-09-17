
import TaskCard from "../components/TaskCard"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { taskList} from "../context/atoms"

const Home = () => {
  const tasks = useRecoilValue(taskList);
  return (
    <main className="p-4 mb-3">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-lg font-semibold">All tasks</h1>

        <Link to="/createtask">
          <Button title="Create task" />
        </Link>
      </div>

      <div className="tasks">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </main>
  );
}

export default Home