import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, addList, editTask } from '../Redux/TodoSlice';
import { CgClose } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import styles from './TodoList.module.css';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function TodoList() {
  const [isClick, setIsClick] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [task, setTask] = useState('');
  const [list, setList] = useState('');  
  const [edit, setEdit] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  const { Todo } = useSelector((state) => state.todo);

  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addTask({ myTask: task }));
    setTask('');
  };

  const handleAddCard = (taskId) => {
    dispatch(addList({ taskId, list }));
    setList('');
  };

  const handleEnterClick = (e, taskId) => {
    if (e.keyCode === 13) {
      handleAddCard(taskId);
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTask({ myTask: task }));
      setTask('');
    }
  };

  const deleteData = (id) => {
    dispatch(deleteTask({ id }));
  };

  const deleteList = () => {
    dispatch();
  };

  const handleEdit = (title) => {
    setEdit(title);
    setShowEdit(!showEdit);
  }

  const handleEditable = (e, task, id, prev) => {
    
    console.log(e, task)
    if(e.keyCode===13){
        if(task !== ''){
        dispatch(editTask({id:id, title:task}));
        setShowEdit(!showEdit);
    }else{
        dispatch(editTask({id:id, title:prev}));
        setShowEdit(!showEdit);
    }
    }
  }

  function handleDynamicRouting({ key }) {
    navigate(`/description/${key}`);
  }

  const onDragEnd = (result) => {
    const { source, destination } = result
    console.log(result)

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    let add,
      active = list

    if (source.droppableId) {

    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.wrapper}>
        {Todo.map((title) => (
          <div className={styles.mapContainer}>
            <div className={styles.title}>
              {!showEdit ?
              <span 
                className={styles.titleHead} 
                onClick={()=> handleEdit(title.AddData)}
                >{title.AddData}
              </span> :
              <input 
                autoFocus 
                className={styles.titleHead} 
                onKeyDown={(e)=>handleEditable(e,edit, title.id, title.AddData)} 
                type='text' 
                value={edit} 
                onChange={(e)=> setEdit(e.target.value)} 
              />
              }
              <span 
              className={styles.more} 
              onClick={() => deleteData(title.id)}>
                <AiFillDelete />
              </span>
              <span className={styles.more}>
                <BiDotsHorizontalRounded />
              </span>
            </div>

            <div>
              <Droppable droppableId={title.id} key={title.id}>
                {(provided) => (
                  <ul className={styles.draggable} {...provided.droppableProps} ref={provided.innerRef}>
                    {title.TodoList.map((item, index) => (
                      <Draggable draggableId={item.id} index={index} key={item.id}>
                        {(provided) => (
                          <li className={styles.card} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div className={styles.cardss}>
                              <p onClick={() => handleDynamicRouting({ key: item.id })}>{item.myList}</p>
                              <AiFillDelete className={styles.deleteListItem} onClick={() => deleteList(item.id)} />
                            </div>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>

            {!showAddCard ? (
              <button className={styles.cardButton} onClick={() => setShowAddCard(!showAddCard)}>
                <GrFormAdd className={styles.addIcon} />
                Add a card
              </button>
            ) : (
              <div className={styles.cardContainer}>
                <input
                  className={styles.inputCard}
                  placeholder="Enter a title for this card..."
                  value={list}
                  onChange={(e) => setList(e.target.value)}
                  onKeyDown={(e) => handleEnterClick(e, title.id)}
                  autoFocus
                />
                <div className={styles.buttonContainer}>
                  <button className={styles.button} onClick={() => handleAddCard(title.id)}>
                    Add card
                  </button>
                  <CgClose
                    className={styles.close}
                    onClick={() => {
                      setShowAddCard(!showAddCard);
                      setList('');
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <div>
          <Droppable droppableId="todolist">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {!isClick ? (
                  <button
                    className={styles.listButton}
                    onClick={() => {
                      setIsClick(!isClick);
                    }}
                  >
                    + Add another list
                  </button>
                ) : (
                  <div className={styles.inputContainer}>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Enter list title..."
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      onKeyDown={handleEnter}
                      autoFocus
                    />
                    <div className={styles.buttonContainer}>
                      <button className={styles.button} onClick={handleAdd}>
                        Add list
                      </button>
                      <CgClose
                        className={styles.close}
                        onClick={() => {
                          setIsClick(!isClick);
                          setTask('');
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default TodoList;
