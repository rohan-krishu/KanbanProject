import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        Todo:[]
    },
    reducers:{
        addTask:(state,action)=>{
            if(action.payload!==''){
                const newTask = {
                    id: Math.random(),
                    title: action.payload,
                    card:[]
                }
            state.Todo.push(newTask);
            }
        },
        deleteTask:(state, action)=> {
            state.Todo = state.Todo.filter((tasks)=> tasks.id !== action.payload)
        },
        editTask: (state, action) => { 
            state.Todo.map((item) => {
                if(item.id === action.payload.id){
                    if(action.payload.title){
                        item.title = action.payload.title
                    }
                }
            })
          }
          
    }
});

export const { addTask, deleteTask, editTask } = TodoSlice.actions;
export default TodoSlice.reducer;