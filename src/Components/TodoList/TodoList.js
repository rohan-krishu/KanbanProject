import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask } from '../Redux/TodoSlice';
import { addCard } from '../Redux/CardSlice';
import { CgClose } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GrFormAdd } from 'react-icons/gr';
import styles from './TodoList.module.css';

function TodoList() {
    
    const [isClick, setIsClick] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false);
    const [task, setTask] = useState('');
    const [card, setCard] = useState('');
    const [edit, setEdit] = useState('');
    const [showEdit, setShowEdit] = useState(false);
    const Dispatch = useDispatch();
    const { Todo } = useSelector((state)=> state.todo);
    const { Card } = useSelector((state)=> state.card);

    const handleAdd = () => {
        Dispatch(addTask(task));
        setTask('');
    }

    const handleAddCard = () => {
        Dispatch(addCard(card));
        setCard('');
    }

    const handleEnterClick = (e) => {
        if(e.keyCode===13){
            Dispatch(addCard(card));
            setCard('');
        }
    }

    const handleEnter = (e) => {
        if(e.keyCode===13){
            Dispatch(addTask(task));
            setTask('');
        }
    } 

    const handleDelete = (id) => {
        Dispatch(deleteTask(id));
    }

    const handleEdit = (id, title) => {
        Dispatch(editTask({id:id}));
        setEdit(title);
        setShowEdit(!showEdit);
    }

    const handleEditable = (e, task, id) => {
        console.log(e, task)
        if(e.keyCode===13){
            Dispatch(editTask({id:id, title:task}));
            setShowEdit(!showEdit);
        }
    }

  return (
    <div className={styles.wrapper}>
        {
            Todo.map((title)=> <div className={styles.mapContainer} key={title.id}>
                <div className={styles.title}>
                    { !showEdit ?
                    <span className={styles.titleHead} onClick={()=> handleEdit(title.id, title.title)}>{title.title}</span> :
                    <input className={styles.titleHead} onKeyDown={(e)=>handleEditable(e,edit, title.id)} type='text' value={edit} onChange={(e)=> setEdit(e.target.value)} />
                    }
                    <span onClick={() => handleDelete(title.id)} className={styles.more}><BiDotsHorizontalRounded/></span>
                </div>

                    {
                        Card.map((card)=> <div className={styles.card}>{card}</div>)
                    }
                
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
                                value={card}
                                onChange={(e)=>setCard(e.target.value)} 
                                onKeyDown={handleEnterClick}                               
                                autoFocus
                            />
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} onClick={handleAddCard}>Add card</button>
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
                    onKeyDown={handleEnter} 
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
