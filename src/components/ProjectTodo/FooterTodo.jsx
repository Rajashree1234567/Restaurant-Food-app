
import '../Css/todo.css';

export default function FooterTodo({completedTodo, totalTodo}){


    return(
        <>
            <div className='footerMain'>
                <div className="footer">
                    <span className='footerText'>😊 Completed todo is:  {completedTodo}  😊</span> 
                    <span className=''>😊 Total todo is: {totalTodo} 😊  </span>
                </div>
            </div>
        </>
    )
}