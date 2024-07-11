

export const FruitFromListArrayOfObject = ({name, price, contry, soldout }) => {
    return(
        <>
            {/* {price >= 210 ?  
                (
                    <li>{name} Price is ${price} and It came from {contry}</li>
                ) : ("")
            } */}


            <li> 
                {name} Price is ${price} and It came from {contry} 
                {soldout ? (<strong>..Currently Out ofstock</strong>): ("")}
            </li>
        </>
    )
}