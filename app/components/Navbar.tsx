import React from "react";

function Navbar() {
  const categories = [
    "sports",
    "sciense",
    "technology",
    "enterteinment",
    "politics",
    "business",
  ];

  return (
    <nav className="h-full w-full text-center bg-slate-600 text-white">
      <h1 className="text-6xl text-bold p-4 text-white ">ABETO news</h1>
      <ul className="flex justify-around">
        {categories.map((it) => (
          <li key={it} className="cursor-pointer hover:scale-105 uppercase">{it}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
