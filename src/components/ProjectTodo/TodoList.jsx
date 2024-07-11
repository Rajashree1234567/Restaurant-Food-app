

import List from './List';


export default function TodoList({todoItem, setTodoItem}){

    const sortedtodos = todoItem.slice().sort((a,b)=> Number(a.done) - Number(b.done));

    return(
        <>    
            <div>
                {sortedtodos?.map((item)=>(           
                    <List key={item.name}  item={item} todoItem={todoItem} setTodoItem={setTodoItem} />
                ))}
            </div>
        </>
    )
}


