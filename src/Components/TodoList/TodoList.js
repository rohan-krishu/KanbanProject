import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../Redux/TodoSlice';
import { CgClose } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GrFormAdd } from 'react-icons/gr';
import styles from './TodoList.module.css';

function TodoList() {
    
    const [isClick, setIsClick] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false);
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
    <div className={styles.wrapper}>
        {
            Todo.map((title)=> <div className={styles.mapContainer}>
                <div className={styles.title}>
                    <span>{title}</span>
                    <span className={styles.more}><BiDotsHorizontalRounded/></span>
                </div>
                {
                    !showAddCard ?
                        <button className={styles.cardButton} onClick={()=>{setShowAddCard(!showAddCard)}}>                            
                            <GrFormAdd className={styles.addIcon}/>
                            Add a card
                        </button> :
                        <div className={styles.cardContainer}>
                            <input 
                                className={styles.inputCard} 
                                placeholder='Enter a title for this card...' 
                                autoFocus
                            />
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} >Add card</button>
                                <CgClose className={styles.close} onClick={()=>{setShowAddCard(!showAddCard)}} />
                            </div>
                        </div>
                }
                </div>)
        }

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
                    autoFocus
                />
                <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleAdd}>Add list</button>
                <CgClose className={styles.close} onClick={()=>{setIsClick(!isClick)}} />
                </div>
            </div>
        }
    </div>
  )
}

export default TodoList;
