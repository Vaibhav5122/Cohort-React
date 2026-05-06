import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MealCard from "./components/MealCard";
import LoadingGrid from "./components/LoadingGrid";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strSource: string;
}

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const url = "https://api.freeapi.app/api/v1/public/meals";
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };
        const response = await fetch(url, options);
        const data = await response.json();

        setMeals(data.data.data);
        console.log("Meals: ", data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {loading ? (
          <LoadingGrid />
        ) : meals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No meals found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-normal">
            © 2026 Recipes to Explore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
