const LoadingGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white animate-pulse"
        >
          {/* Skeleton Image */}
          <div className="w-full h-48 md:h-56 bg-gray-200"></div>

          {/* Skeleton Content */}
          <div className="p-4">
            {/* Skeleton Badge */}
            <div className="inline-block mb-3 h-6 w-16 bg-gray-200 rounded"></div>

            {/* Skeleton Title */}
            <div className="mb-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>

            {/* Skeleton Button */}
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingGrid;
