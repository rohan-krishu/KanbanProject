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

        reorderList: (state, action) => {
            const { sourceListId, destinationListId, sourceIndex, destinationIndex } = action.payload;
            const sourceList = state.Todo.find((list) => list.id === sourceListId);
            const destinationList = state.Todo.find((list) => list.id === destinationListId);
      
            if (sourceList && destinationList) {
              // Reorder the tasks within the same list
              if (sourceListId === destinationListId) {
                const [reorderedTask] = sourceList.TodoList.splice(sourceIndex, 1);
                sourceList.TodoList.splice(destinationIndex, 0, reorderedTask);
              } else {
                // Move the task from the source list to the destination list
                const [movedTask] = sourceList.TodoList.splice(sourceIndex, 1);
                destinationList.TodoList.splice(destinationIndex, 0, movedTask);
              }
            }
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

export const { addTask, deleteTask, addList, editTask, ListItemDelete,reorderList } = TodoSlice.actions;
export default TodoSlice.reducer;