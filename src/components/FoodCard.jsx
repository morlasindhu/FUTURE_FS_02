
export default function FoodCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden transform hover:scale-[1.01] transition">
      <div className="w-full h-40 bg-gray-100 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1555992336-03a23c0c3d14?w=800&q=60&auto=format&fit=crop";
          }}
        />
      </div>

      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold line-clamp-2">{item.name}</h3>
        <p className="text-xs text-gray-500">{item.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">₹{item.price}</div>
          <button
            onClick={() => onAdd(item)}
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
