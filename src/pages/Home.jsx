import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/foodData";

export default function Home() {
  const [search, setSearch] = useState("");

  // Filter categories based on search text
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Food Categories</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex border rounded-xl px-3 py-2 w-full items-center shadow-sm bg-white">
          {/* Search Icon */}
          <span className="material-icons text-gray-500 text-xl">search</span>

          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full outline-none"
          />
        </div>
      </div>

      {/* Category List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {(search.length > 0 ? filtered : categories).map((c) => (
          <Link
            key={c.slug}
            to={`/category/${c.slug}`}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-md"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-24 h-24 object-cover rounded-full mb-3"
            />
            <div className="font-semibold text-center">{c.name}</div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filtered.length === 0 && search.length > 0 && (
        <div className="mt-6 text-center text-gray-500">No matching results found.</div>
      )}
    </div>
  );
}
