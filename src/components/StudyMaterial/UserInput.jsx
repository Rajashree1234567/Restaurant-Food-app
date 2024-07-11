import { useState } from "react"


export const UserInput =()=> {

    const [name, setName] = useState("");
    // const handleUserName = (e) => {
    //     setName(e.target.value);
    // }
    return(
        <>
            <form>
                <input 
                    type="text"
                    value={name}
                    // onChange={handleUserName}
                    // onChange={(e)=>handleUserName(e)}
                    onChange={(e)=> (setName(e.target.value))}
                />

            </form>
        </>
    )
}