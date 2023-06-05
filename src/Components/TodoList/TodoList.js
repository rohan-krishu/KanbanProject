import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../Redux/TodoSlice';
import { CgClose } from 'react-icons/cg';
import styles from './TodoList.module.css';

function TodoList() {
    
    const [isClick, setIsClick] = useState(false);
    const [task, setTask] = useState('');
    const Dispatch = useDispatch();
    const { Todo } = useSelector((state)=> state.todo);

    const handleAdd = () => {
        Dispatch(addTask(task));
        setTask('');
    }

    const handleEnter = (e) => {
        if(e.keyCode===13){
            Dispatch(addTask(task));
            setTask('');
        }
    }

  return (
    <div>
        {
            !isClick ? 
            <button className={styles.listButton} onClick={()=>{setIsClick(!isClick)}}>+ Add another list</button> :
            <div className={styles.inputContainer}>
                <input 
                    className={styles.input}
                    type='text' 
                    placeholder='Enter list title...'
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                    onkeydown={handleEnter} 
                />
                <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleAdd}>Add list</button>
                <CgClose className={styles.close} onClick={()=>{setIsClick(!isClick)}} />
                </div>
            </div>
        }
        

        {
            Todo.map((task)=> <div>{task}</div>)
        }
    </div>
  )
}

export default TodoList;
