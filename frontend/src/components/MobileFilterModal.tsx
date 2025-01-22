"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FilterValues } from './FilterDropdown';

type MobileFilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterValues) => void;
  initialValues: FilterValues;
};

export default function MobileFilterModal({ 
  isOpen, 
  onClose, 
  onApply,
  initialValues 
}: MobileFilterModalProps) {
  const [filters, setFilters] = useState<FilterValues>(initialValues);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-[#303030]">Filter</h2>
          <button onClick={onClose}>
            <Image 
              src="/close.svg" 
              alt="Close" 
              width={24} 
              height={24} 
            />
          </button>
        </div>

        {/* Language Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#303030] mb-2">
            Language
          </label>
          <select
            value={filters.language}
            onChange={(e) => setFilters(prev => ({ ...prev, language: e.target.value }))}
            className="w-full p-2 border border-gray-200 rounded-lg"
          >
            <option value="">All Languages</option>
            <option value="BAHASA SUNDA">Bahasa Sunda</option>
            <option value="BAHASA JAWA">Bahasa Jawa</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#303030] mb-2">
            Price Range
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => setFilters(prev => ({ 
                ...prev, 
                priceRange: [Number(e.target.value), prev.priceRange[1]]
              }))}
              className="w-1/2 p-2 border border-gray-200 rounded-lg"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters(prev => ({ 
                ...prev, 
                priceRange: [prev.priceRange[0], Number(e.target.value)]
              }))}
              className="w-1/2 p-2 border border-gray-200 rounded-lg"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Sort By */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#303030] mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
            className="w-full p-2 border border-gray-200 rounded-lg"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>

        {/* Apply Button */}
        <button
          onClick={() => {
            onApply(filters);
            onClose();
          }}
          className="w-full py-3 bg-[#DF5532] text-white rounded-lg font-medium"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
} 