interface Cat {
  name?: string;
  description?: string;
  image?: string;
}

interface CatCardProps {
  cat: Cat;
  isLoading: boolean;
}

const CatCard = ({ cat, isLoading }: CatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-black max-w-md mx-auto">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-black font-semibold">Loading...</p>
            </div>
          </div>
        ) : cat.image ? (
          <img
            src={cat.image}
            alt={cat.name || "Random Cat"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-600 font-medium">No image available</p>
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="p-6 border-t-2 border-black">
        {/* Cat Name */}
        <h2 className="text-2xl font-black text-black mb-3">
          {cat.name || "Unknown Cat"}
        </h2>

        {/* Cat Description */}
        <p className="text-gray-700 leading-relaxed text-base font-medium">
          {cat.description ||
            "Click the button to discover a new feline friend!"}
        </p>
      </div>
    </div>
  );
};

export default CatCard;
