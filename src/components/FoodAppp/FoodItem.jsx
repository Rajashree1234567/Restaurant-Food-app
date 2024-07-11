import styled from "./nav.module.css";

export default function FoodItem({keyFood, setFoodId}){
    return(
        <>
            <div className={styled.itemContainer}>
                <img className={styled.itemImage} src={keyFood.image} alt="image"/>
                <div className={styled.itemContent}>
                    <p className={styled.itemName}>{keyFood.title}</p>
                    <div className={styled.buttonContainer}>
                        <button 
                            className={styled.itemButton}
                            onClick={()=>{
                                setFoodId(keyFood.id)
                            }}
                        >
                            View Recipe
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}