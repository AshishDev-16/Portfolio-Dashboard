import { useState } from 'react';

type FilterDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterValues) => void;
};

export type FilterValues = {
  language: string;
  priceRange: [number, number];
  sortBy: 'newest' | 'oldest' | 'price_asc' | 'price_desc';
};

const languages = ['BAHASA SUNDA', 'BAHASA JAWA', 'BAHASA INDONESIA'];
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
];

export default function FilterDropdown({ isOpen, onClose, onApply }: FilterDropdownProps) {
  const [filters, setFilters] = useState<FilterValues>({
    language: '',
    priceRange: [0, 1000],
    sortBy: 'newest',
  });

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-[300px] bg-white rounded-[10px] shadow-lg p-4 z-50">
      {/* Language Filter */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#303030] mb-2">Language</h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center space-x-2">
              <input
                type="radio"
                name="language"
                value={lang}
                checked={filters.language === lang}
                onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                className="text-[#DF5532] focus:ring-[#DF5532]"
              />
              <span className="text-sm text-[#303030]">{lang}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#303030] mb-2">Price Range</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => setFilters({ 
              ...filters, 
              priceRange: [Number(e.target.value), filters.priceRange[1]]
            })}
            className="w-24 px-2 py-1 border rounded text-sm"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ 
              ...filters, 
              priceRange: [filters.priceRange[0], Number(e.target.value)]
            })}
            className="w-24 px-2 py-1 border rounded text-sm"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-[#303030] mb-2">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ 
            ...filters, 
            sortBy: e.target.value as FilterValues['sortBy']
          })}
          className="w-full px-2 py-1 border rounded text-sm"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm text-[#303030] hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onApply(filters);
            onClose();
          }}
          className="px-4 py-2 text-sm text-white bg-[#DF5532] rounded hover:bg-[#DF5532]/90"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
} 