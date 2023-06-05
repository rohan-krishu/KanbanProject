import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        Todo:[]
    },
    reducers:{
        addTask:(state,action)=>{
            if(action.payload!==''){
            state.Todo.push(action.payload);
            }
        }
    }
});

export const { addTask } = TodoSlice.actions;
export default TodoSlice.reducer;