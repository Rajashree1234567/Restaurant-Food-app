
const name = "Dear";

function displayDate(){
    return "is"
}
function displayName() {
    return "faviorite Number..!"
}
const displayNumber = () => {
    return <span>{displayName()} for john Smith.</span>
}

function Hello() {
    return(
        <>
            <h1>hello {name} {10+20} {displayDate()} my {displayName()}</h1>
            <h2>{displayNumber()}</h2>
        </>
    )
}

export default Hello;