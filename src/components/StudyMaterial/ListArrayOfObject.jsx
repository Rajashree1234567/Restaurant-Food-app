import { FruitFromListArrayOfObject } from "./FruitFromListArrayOfObject";

export const ListArrayOfObject = () => {
  const fruits = [
    { name: "apple", price: "110", contry: "india", soldout: true},
    { name: "orange", price: "310", contry: "america" , soldout: false},
    { name: "Pienapple", price: "210", contry: "germany", soldout:true },
    { name: "grapes", price: "180", contry: "italy", soldout:false },
    { name: "gauva", price: "191", contry: "australia", soldout:true },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <FruitFromListArrayOfObject
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            contry={fruit.contry}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </>
  );
};
