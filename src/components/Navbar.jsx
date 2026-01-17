import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const quantity = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">FoodZone</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/cart" className="text-sm">Cart {quantity > 0 && <span className="ml-1 text-red-500">({quantity})</span>}</Link>
          <Link to="/checkout" className="text-sm">Checkout</Link>
        </nav>
      </div>
    </header>
  );
}
