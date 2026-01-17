import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      setError("Please fill all fields");
      return;
    }
    // simulate order success
    clearCart();
    navigate("/", { replace: true });
    alert("Order placed successfully! (simulated)");
  };

  if (cart.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={submit} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full border p-2 rounded" placeholder="Full name" />
        <input value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className="w-full border p-2 rounded" placeholder="Phone" />
        <textarea value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} className="w-full border p-2 rounded" placeholder="Address" />
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Total</div>
            <div className="text-xl font-bold">₹{total}</div>
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Place Order</button>
        </div>
      </form>
    </div>
  );
}
