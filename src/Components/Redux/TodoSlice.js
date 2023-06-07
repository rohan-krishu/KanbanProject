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
        editTask:(state, action)=> {
            // const EditedTask = state.Todo.find((item)=> item.id === action.payload.id);
            const EditedTask = { id : action.payload.id, title : action.payload.title } ;
            console.log(EditedTask);
            state.Todo.forEach((item, i)=> {
                if(item.id === action.payload.id){
                    state.Todo[i] = EditedTask;
                }
            })
        }
    }
});

export const { addTask, deleteTask, editTask } = TodoSlice.actions;
export default TodoSlice.reducer;