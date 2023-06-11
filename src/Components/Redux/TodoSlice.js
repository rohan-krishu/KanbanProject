import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        Todo: [],
    },
    reducers: {
        addTask: (state, action) => {

            const newTask = {
                AddData: action.payload.myTask,
                id: uuidv4(),
                TodoList: []
            }

            state.Todo.push(newTask)
        },
        deleteTask: (state, action) => {
            state.Todo = state.Todo.filter((item) => item.id !== action.payload.id);
        },

        addList: (state, action) => {
            const {taskId, list} = action.payload;
            const task = state.Todo.find((item)=>item.id===taskId);

            if(task){
                const newList={
                    id: uuidv4(),
                    myList: list
                }
                task.TodoList.push(newList)
            }
        },
        ListItemDelete:(state, action)=>{

        },
        editTask: (state, action) => { 
            state.Todo.map((item) => {
                if(item.id === action.payload.id){
                    if(action.payload.title){
                        item.AddData = action.payload.title
                    }
                }
            })
          }
    }
});

export const { addTask, deleteTask, addList, editTask } = TodoSlice.actions;
export default TodoSlice.reducer;