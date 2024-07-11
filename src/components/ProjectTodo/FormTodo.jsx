import React, { useState } from 'react'
import styles from './todoList.module.css';

export default function FormTodo({todoItem, setTodoItem}) {

    // const[todoName, setTodoName] = useState("")
    const[todoName, setTodoName] = useState({
        name: '',
        done: false,
    })


    function handleTodoSubmit(e){
        e.preventDefault();
        setTodoItem([...todoItem,todoName]);
        console.log(todoItem);
        setTodoName({name: '', done: false,});
    }

    return(
        <>
            <form onSubmit={handleTodoSubmit} className={styles.todoForm}>
                <div className={styles.inputContainer}>
                    <input
                        placeholder='Enter todo item'
                        className={styles.mordernInput}
                        type='text'
                        value={todoName.name}
                        onChange={
                            (e)=>(setTodoName({name:e.target.value, done: false}))
                        }
                    />
                    <button className={styles.mordernButton}>Add Todo</button>
                </div>
            </form>
        </>
    )
}