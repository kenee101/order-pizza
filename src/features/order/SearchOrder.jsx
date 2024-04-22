import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search your order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-50 rounded-full bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-700 focus:ring-opacity-50 md:w-72 md:focus:w-80"
      />
    </form>
  );
}

export default SearchOrder;
