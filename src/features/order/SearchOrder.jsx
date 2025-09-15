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
        type="text"
        placeholder="Search Orders..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-20 rounded-full border-2 border-stone-400 px-4 py-2 text-sm transition-all duration-500 placeholder:text-stone-500 focus:ring focus:ring-yellow-500 focus:outline-none sm:focus:w-72 md:w-64 md:text-base"
      />
    </form>
  );
}

export default SearchOrder;
