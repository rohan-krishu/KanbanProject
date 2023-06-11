import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        Todo: JSON.parse(localStorage.getItem("tasks")) || [],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                AddData: action.payload.myTask,
                id: uuidv4(),
                TodoList: []
            }

            state.Todo.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(state.Todo))
        },

        deleteTask: (state, action) => {
            state.Todo = state.Todo.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("tasks", JSON.stringify(state.Todo))
        },

        addList: (state, action) => {
            const { taskId, list } = action.payload;
            const task = state.Todo.find((item) => item.id === taskId);

            if (task) {
                const newList = {
                    id: uuidv4(),
                    myList: list
                }
                task.TodoList.push(newList)
                localStorage.setItem("tasks", JSON.stringify(state.Todo))
            }
        },
        listItemDelete: (state, action) => {
            
        }
    }
});

export const { addTask, deleteTask, addList } = TodoSlice.actions;
export default TodoSlice.reducer;