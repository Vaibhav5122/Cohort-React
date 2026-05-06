import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterNav from "./components/FilterNav";
import ProductCard from "./components/ProductCard";
import Loader from "./components/Loader";

interface Product {
  id: string;
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  rating: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    const url = "https://api.freeapi.app/api/v1/public/randomproducts";
    const options = { method: "GET", headers: { accept: "application/json" } };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setProducts(result.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  if (loading) return <Loader />;

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <FilterNav
        categories={categories}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
      />

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products found</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
