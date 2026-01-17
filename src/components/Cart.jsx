import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3">Your cart is empty.</h2>
        <Link to="/" className="text-blue-600">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((it) => (
          <div key={it.id} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
            <div className="flex items-center gap-3">
              <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-gray-500">₹{it.price} each</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                value={it.quantity}
                onChange={(e) => updateQuantity(it.id, e.target.value)}
                className="w-16 text-center border rounded p-1"
              />
              <div className="font-semibold">₹{it.price * it.quantity}</div>
              <button onClick={() => removeFromCart(it.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}

        <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
          <div>
            <div className="text-gray-500">Total</div>
            <div className="text-2xl font-bold">₹{total}</div>
          </div>
          <div className="flex gap-3">
            <button onClick={clearCart} className="px-4 py-2 border rounded">Clear</button>
            <Link to="/checkout" className="px-4 py-2 bg-green-600 text-white rounded">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
