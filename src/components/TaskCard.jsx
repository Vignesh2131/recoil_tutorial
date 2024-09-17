
import { Link } from 'react-router-dom';
import { IoCheckmarkDone } from "react-icons/io5";
import { TbProgress } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
const TaskCard = ({ task }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="border px-4 py-3 rounded-lg mb-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-base flex gap-6 items-center">
          {task.title}
          <span className="text-xl font-semibold inline-block">
            {task.isCompleted ? (
              <IoCheckmarkDone className="text-green-800" />
            ) : (
              <TbProgress className="text-yellow-700" />
            )}
          </span>
        </h1>
        <div className="flex justify-center items-center gap-3">
          <div className="text-2xl" onClick={() => setClicked((prev) => !prev)}>
            {clicked ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </div>
          <Link to={"/updatetask/" + task.id}>
            <button className="font-semibold text-sm flex items-center gap-3 bg-teal-400 p-2 rounded-md text-white hover:rounded-xl">
              Edit
              <span>
                <FaRegEdit />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {clicked ? (
        <div className="transition-transform expanded ease-in duration-500">
          <p className="font-semibold">
            Description :{" "}
            <span className="font-normal">{task.description}</span>
          </p>
          <i className="text-sm">
            {task.isUpdated ? "Last Updated" : "Created"} at {task.time}
          </i>
          <div>
            <label className='font-semibold' htmlFor="Status">Status : </label>
            <select className='border rounded-md' name="status" defaultValue={task.isCompleted?"Completed":"Pending"}>
              <option className='text-base' value="Pending">Pending</option>
              <option className='text-base' value="Completed">Completed</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskCard