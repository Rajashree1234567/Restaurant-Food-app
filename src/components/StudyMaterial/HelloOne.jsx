

function HelloOne(props) {
    console.log(props);
    return(
        <>
           <h1> {props.message} {props.name} </h1> 
        </>
    )
}

export default HelloOne;