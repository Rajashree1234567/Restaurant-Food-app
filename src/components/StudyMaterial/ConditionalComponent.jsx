import FalseCompWelcome from "./FalseCompWelcome";
import { TrueCompWelcome } from "./TrueCompWelcome";


export default function ConditionalComponent(){
    const displayWelcome = false;
    if(displayWelcome){
        return <TrueCompWelcome />
    }else{
        return <FalseCompWelcome />
    }

    return(
        <>
        </>
    )
}