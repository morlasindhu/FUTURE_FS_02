import { useContext } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { CartContext } from "../context/CartContext";
import { categories, foodItems } from "../data/foodData";

export default function Category() {
  const { name } = useParams(); // slug like "starters"
  const { addToCart } = useContext(CartContext);

  // find category object
  const cat = categories.find((c) => c.slug === name);
  const items = foodItems[name];

  if (!cat || !items) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-red-500 font-semibold">Category not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{cat.name.toUpperCase()}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <FoodCard key={it.id} item={it} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}
