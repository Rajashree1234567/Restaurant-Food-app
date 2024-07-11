import { useState } from "react"


export default function InputTwoField(){

    const[name, setName] = useState({firstName:"", lastName:""})
    const handleAdd = (e) => {
        e.preventDefault(); //helps to not to page reload
        console.log(name);
    }
    return(
        <>
            <div>
                <h1>{name.firstName} - {name.lastName}</h1>
            </div>
            <form>
                <input 
                    type="text"
                    placeholder="First Name"
                    value={name.firstName}
                    onChange={(e)=>(setName({...name,firstName:e.target.value}))}
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={name.lastName}
                    onChange={(e)=>{setName({...name, lastName:e.target.value})}}
                />

                <button onClick={handleAdd} >
                    add
                </button>
            </form>
        </>
    )
}