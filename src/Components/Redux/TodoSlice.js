import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        Todo: [],
    },
    reducers: {
        addTask: (state, action) => {
            if(action.payload.myTask){
                const newTask = {
                    AddData: action.payload.myTask,
                    id: uuidv4(),
                    TodoList: []
                }

                state.Todo.push(newTask)
            }
        },
        deleteTask: (state, action) => {
            state.Todo = state.Todo.filter((item) => item.id !== action.payload.id);
        },

        addList: (state, action) => {
            const {taskId, list} = action.payload;
            const task = state.Todo.find((item)=>item.id===taskId);

            if(task){
                if(list){
                    const newList={
                        id: uuidv4(),
                        myList: list
                    }
                    task.TodoList.push(newList)
                }
            }
        },
        ListItemDelete:(state, action)=>{
            // const newList = state.Todo.filter((item) => item.id === action.payload.titleId );
            // newList.TodoList = newList.TodoList.filter((item) => item.id !== action.payload.id);
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

export const { addTask, deleteTask, addList, editTask, ListItemDelete } = TodoSlice.actions;
export default TodoSlice.reducer;