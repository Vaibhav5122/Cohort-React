interface FilterNavProps {
  categories: string[];
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
}

const FilterNav = ({
  categories,
  categoryFilter,
  onCategoryChange,
}: FilterNavProps) => {
  return (
    <nav className="sticky top-0 z-40 bg-slate-800 bg-opacity-95 backdrop-blur py-4 px-4 border-b border-slate-700">
      <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
              categoryFilter === category
                ? "bg-sky-500 text-white shadow-lg"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FilterNav;
