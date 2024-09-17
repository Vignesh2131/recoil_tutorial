import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <aside className="flex justify-between w-full lg:h-full">
      <Link to="/">
        <div className="brand-name font-bolds">Taskmaster</div>
      </Link>
      <div className="navigations">
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hover:font-semibold">Home</li>
          </Link>
          <Link to="/completedTasks">
            <li className="hover:font-semibold">Completed Tasks</li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
