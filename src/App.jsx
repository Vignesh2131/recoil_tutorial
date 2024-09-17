import Sidebar from "./components/Sidebar"

import {Routes,Route, BrowserRouter} from "react-router-dom"
import CreateTask from "./pages/CreateTask";
import Home from "./pages/Home";

import { RecoilRoot } from "recoil";
import UpdateTask from "./pages/UpdateTask";
import CompletedTask from "./pages/CompletedTask";
function App() {
 
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="App p-6">
          <div className="">
            <Sidebar />
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createTask" element={<CreateTask />} />
              <Route path="/updatetask/:id" element={<UpdateTask />} />
              <Route path="/completedTasks" element={<CompletedTask/>}/>
            </Routes>
          </div>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App
