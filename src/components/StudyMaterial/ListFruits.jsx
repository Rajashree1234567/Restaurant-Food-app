

export default function ListFruits() {
    const fruits = ['apple', 'mango', 'grapes', 'banana'];
    return(
        <>
           <ul>
                {fruits.map((fruit)=>(
                    <li key={fruit}>{fruit}</li>
                ))}
           </ul>
        </>
    )
}