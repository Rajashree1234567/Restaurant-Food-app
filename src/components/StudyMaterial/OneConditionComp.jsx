

export default function OneConditionComp() {

    // const displayMessage = false;
    // if(displayMessage){
    //    return <h2>This is message 1</h2>
    // }else{
    //     return <h3>This is message 2</h3>
    // }

    // we can use above method as well

    let message;
    const displayMessage = false;
    if(displayMessage){
        message = <h2>This is message 1</h2>
    }else{
        message = <h3>This is message 2</h3>
    }


    
    return message;

    // called element variable
    
}