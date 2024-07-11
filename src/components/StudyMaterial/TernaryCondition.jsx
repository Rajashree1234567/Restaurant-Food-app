import FalseCompWelcome from "./FalseCompWelcome";
import { TrueCompWelcome } from "./TrueCompWelcome";


export default function TernaryCondition() {

    // const displayText = false;
    // return displayText ? <h1>You're welcome</h1> : <h3>Closed</h3>

    // const displayElement = true;
    // return displayElement ? <TrueCompWelcome /> : <FalseCompWelcome />
    
    const displayText = false;
    const displayElement = true;

    return(
        <div>
            <div>{displayText ? <h2>You're welcome</h2> : <h2>Closed</h2>}</div>
            <div>{displayElement ? <TrueCompWelcome /> : <FalseCompWelcome />}</div>
        </div>
    )
}