import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        Todo: JSON.parse(localStorage.getItem("tasks")) || [],
    },
    reducers: {
        addTask: (state, action) => {
            if (action.payload.myTask) {

                const newTask = {
                    AddData: action.payload.myTask,
                    id: uuidv4(),
                    TodoList: []
                }

                state.Todo.push(newTask)
                localStorage.setItem("tasks", JSON.stringify(state.Todo))
            }
        },

        deleteTask: (state, action) => {
            state.Todo = state.Todo.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("tasks", JSON.stringify(state.Todo))
        },

        addList: (state, action) => {
            const { taskId, list } = action.payload;
            const task = state.Todo.find((item) => item.id === taskId);

            
                if (list) {
                    const newList = {
                        id: uuidv4(),
                        myList: list
                    }
                    task.TodoList.push(newList)
                    localStorage.setItem("tasks", JSON.stringify(state.Todo))
                }
            
        },
        ListItemDelete: (state, action) => {
            state.Todo = state.Todo.map((item) => {
                if (item.id === action.payload.titleId) {
                    item.TodoList = item.TodoList.filter(
                        (listItem) => listItem.id !== action.payload.id
                    );
                }
                return item;
            });
            localStorage.setItem("tasks", JSON.stringify(state.Todo));
        },


        editTask: (state, action) => {
            state.Todo.map((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.title) {
                        item.AddData = action.payload.title
                    }
                }
            })
        },
        editDescription: (state, action)=>{
            
        }
    }
});

export const { addTask, deleteTask, addList, editTask, ListItemDelete } = TodoSlice.actions;
export default TodoSlice.reducer;