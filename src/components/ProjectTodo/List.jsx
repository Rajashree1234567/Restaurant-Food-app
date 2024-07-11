
import styles from './todoList.module.css';

export default function List({item, todoItem, setTodoItem }){

    const handleButtonDelete = (item) => {
        let filteredData = todoItem?.filter((keyitem)=> keyitem !== item)
        // console.log("deletebutton click for", item);
        // console.log('filteredData', filteredData);
        // console.log('todoItem', todoItem);
        // console.log('item', item);
        setTodoItem(filteredData);
    }
    const handleDeleteName = (name) => {
        console.log('clicked on DeleteName', name);
        const newTodo = todoItem.map((keyName)=> 
                keyName.name === name ? {...keyName, done: !keyName.done} : keyName
            );
        setTodoItem(newTodo);
    }

    const styledClass = item.done ? styles.completeTodo : "";

    return(
        <>

            <li className={styles.containerBox}>
                <span onClick={()=> handleDeleteName(item.name)} className={styledClass} >
                    {item.name}
                </span>
                <button 
                    className={styles.deleteButton}
                    onClick={()=>handleButtonDelete(item)}    
                >
                        X
                </button>
            </li>

        </>
    )
}