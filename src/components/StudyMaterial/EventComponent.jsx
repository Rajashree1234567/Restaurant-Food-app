

export const EventComponent = ()=> {

    function handleClickMessage(){
        console.log("hi");
    }

    return(
        <>
            <button onClick={handleClickMessage} >click here to get message</button>
        </>
    )
}