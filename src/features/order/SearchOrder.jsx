import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-md bg-yellow-100 px-4 py-2 text-sm transition-all duration-500 placeholder:text-stone-800 focus:w-32 sm:focus:w-72  sm:w-60"
      />
    </form>
  );
}

export default SearchOrder;
