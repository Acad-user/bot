import React from 'react';
import { Search } from 'lucide-react';
import { useWaterStore } from '../store/waterStore';

const SearchBar: React.FC = () => {
  const filterCities = useWaterStore((state) => state.filterCities);
  const resetCities = useWaterStore((state) => state.resetCities);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query) {
      filterCities(query);
    } else {
      resetCities();
    }
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search cities..."
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;