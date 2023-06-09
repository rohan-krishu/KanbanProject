import TodoList from "./Components/TodoList/TodoList";
import './App.css';
import Description from "./Components/Description/Description";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage/HomePage";


function App() {
  return (
    <div >
      <Routes>
       
      <Route path="/" element={<Homepage />} />
      <Route path="/kanban" element={<TodoList />} />

        <Route path="/description/:id" element={<Description />} />
      </Routes>

    </div>
  );
}

export default App;
