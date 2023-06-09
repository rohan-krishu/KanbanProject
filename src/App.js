import TodoList from "./Components/TodoList/TodoList";
import './App.css';
import Description from "./Components/Description/Description";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div >
      <Routes>
       
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<TodoList/>}/>
        <Route path="/description/:id" element={<Description />} />
      </Routes>

    </div>
  );
}

export default App;
