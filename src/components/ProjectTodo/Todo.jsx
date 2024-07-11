import React, { useState } from 'react'
import TodoList from './TodoList';
import FormTodo from './FormTodo';
import FooterTodo from './FooterTodo';

export const Todo = () => {

const[todoItem, setTodoItem] = useState([]);

  let completedTodo = todoItem.filter((keytodo)=> keytodo.done).length;
  let totalTodo = todoItem.length;

  return (
    <>
        <FormTodo todoItem={todoItem} setTodoItem={setTodoItem} />
        <TodoList todoItem={todoItem}  setTodoItem={setTodoItem} />
        <FooterTodo completedTodo = {completedTodo} totalTodo={totalTodo} />
    </>
  )
}
