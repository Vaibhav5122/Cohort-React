interface Product {
  id: string;
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
      {/* Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-block px-3 py-1 bg-blue-400 text-white text-xs font-semibold rounded-full">
          {product.category}
        </span>
      </div>

      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-slate-500 text-center">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-sm">Product Image</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Brand */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-red-400 font-medium">{product.brand}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-amber-300">
            ${product.price.toFixed(2)}
          </div>
          <div className="flex items-center gap-1 bg-slate-700 px-3 py-1 rounded-lg">
            <span className="text-yellow-400">★</span>
            <span className="text-white text-sm font-semibold">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-2 bg-emerald-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
