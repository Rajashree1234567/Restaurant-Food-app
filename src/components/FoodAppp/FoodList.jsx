import FoodItem from "./FoodItem";


export default function FoodList({foodData, setFoodId}){
    return(
        <>
            {foodData.map((keyFood)=>(
                <FoodItem  key={keyFood.id} keyFood={keyFood} setFoodId={setFoodId} />
            ))}
        </>
    )
}