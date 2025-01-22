"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";
import { getProjects } from "@/services/api";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import debounce from 'lodash/debounce';
import FilterDropdown, { FilterValues } from '@/components/FilterDropdown';
import MobileFilterModal from '@/components/MobileFilterModal';

const tabs = ["Project", "Saved", "Shared", "Achievement"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Project");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterValues>({
    language: '',
    priceRange: [0, 1000],
    sortBy: 'newest',
  });

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (search: string) => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProjects({ 
          search,
          category: activeTab !== 'Project' ? activeTab : undefined,
          language: activeFilters.language,
          priceRange: activeFilters.priceRange,
          sortBy: activeFilters.sortBy
        });
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    }, 300),
    [activeTab, activeFilters]
  );

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  // Initial load and tab change
  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [activeTab, debouncedSearch, searchTerm]);

  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters);
    // Update your API call to include these filters
    debouncedSearch(searchTerm);
  };

  return (
    <div className="p-0 md:p-6 h-[calc(100vh-72px)]">
      <div className="bg-[#F5F5F5] md:bg-white md:rounded-[15px] h-full flex flex-col overflow-hidden md:shadow-sm">
        <div className="p-4 md:p-8 flex-1 overflow-y-auto scrollbar-thin">
          {/* Title and Icons - Mobile */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h1 className="text-[#303030] text-xl font-semibold">Portfolio</h1>
            <div className="flex gap-4">
              <button className="relative">
                <Image 
                  src="/Vector (1).svg" 
                  alt="Cart" 
                  width={16} 
                  height={20}
                  className="text-[#DF5532]"
                />
              </button>
              <button className="relative">
                <Image 
                  src="/Vector (2).svg" 
                  alt="Notifications" 
                  width={16} 
                  height={20}
                  className="text-[#DF5532]"
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#DF5532] rounded-full"></span>
              </button>
            </div>
          </div>

          {/* Desktop Title */}
          <h1 className="hidden md:block text-[#303030] text-2xl font-semibold mb-6">Portfolio</h1>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between mb-4">
            {/* Tabs - Desktop */}
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 -mb-[1px] text-sm font-medium ${
                    activeTab === tab
                      ? "text-[#DF5532] border-b-2 border-[#DF5532]"
                      : "text-[#8D8D8D]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search and Filter - Desktop */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-[#303030] hover:bg-gray-50 rounded-lg"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.667 2H1.33366C0.965994 2 0.666992 2.29899 0.666992 2.66667C0.666992 2.84348 0.736898 3.01305 0.861992 3.13813L6.00033 8.27647V12.6667C6.00033 12.9221 6.14577 13.1554 6.37341 13.2716L8.37341 14.2716C8.72839 14.4491 9.16699 14.1938 9.16699 13.7947V8.27647L14.3053 3.13813C14.4304 3.01305 14.5003 2.84348 14.5003 2.66667C14.5003 2.29899 14.2013 2 13.8337 2H14.667Z" fill="currentColor"/>
                  </svg>
                  <span>Filter</span>
                </button>
                <FilterDropdown 
                  isOpen={isFilterOpen}
                  onClose={() => setIsFilterOpen(false)}
                  onApply={handleApplyFilters}
                />
              </div>

              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search a project"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-[343px] h-11 pl-4 pr-12 rounded-lg bg-white border border-[#E0E0E0] focus:outline-none focus:border-[#DF5532] focus:ring-1 focus:ring-[#DF5532] placeholder:text-[#8D8D8D] text-[#303030]"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-[#DF5532] rounded-full">
                  <Image 
                    src="/ic_baseline-search.svg"
                    alt="Search"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Tabs - Mobile */}
            <div className="flex overflow-x-auto scrollbar-none -mx-4 px-4 mb-4">
              <div className="flex min-w-full">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#DF5532] border-b-2 border-[#DF5532]"
                        : "text-[#8D8D8D]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar - Mobile */}
            <div className="relative flex items-center mb-4">
              <input
                type="text"
                placeholder="Search a project"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full h-11 pl-4 pr-12 rounded-lg bg-white border border-[#E0E0E0] focus:outline-none focus:border-[#DF5532] focus:ring-1 focus:ring-[#DF5532] placeholder:text-[#8D8D8D] text-[#303030]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-[#DF5532] rounded-full">
                <Image 
                  src="/ic_baseline-search.svg"
                  alt="Search"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

          {/* Project cards */}
          <div className="flex flex-col gap-3 md:gap-6">
            {loading ? (
              <>
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
              </>
            ) : error ? (
              <div className="text-red-500 text-center py-4">
                <p>Error: {error}</p>
                <button 
                  onClick={() => debouncedSearch(searchTerm)}
                  className="mt-2 text-sm text-blue-500 hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : projects.length === 0 ? (
              <div className="text-gray-500 text-center py-4">No projects found</div>
            ) : (
              projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>

          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 md:hidden flex items-center gap-2 px-6 py-2.5 bg-[#DF5532] text-white rounded-full shadow-lg"
          >
            <Image 
              src="/Vector (3).svg" 
              alt="Filter" 
              width={18} 
              height={12}
              className="text-white"
            />
            <span>Filter</span>
          </button>

          {/* Mobile Filter Modal */}
          <MobileFilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={handleApplyFilters}
            initialValues={activeFilters}
          />
        </div>
      </div>
    </div>
  );
} 