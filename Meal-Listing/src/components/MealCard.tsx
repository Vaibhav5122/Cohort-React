interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strSource: string;
}

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-gray-300 transition-colors">
      {/* Image */}
      <div className="w-full h-48 md:h-56 overflow-hidden bg-gray-100">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="inline-block mb-3">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded border border-gray-200">
            {meal.strCategory}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black line-clamp-2 mb-4">
          {meal.strMeal}
        </h2>

        {/* Link Button */}
        <a
          href={meal.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors"
        >
          View Full Recipe →
        </a>
      </div>
    </article>
  );
};

export default MealCard;
