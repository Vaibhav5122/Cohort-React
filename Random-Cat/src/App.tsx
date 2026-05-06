import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import ActionButton from "./components/ActionButton";

interface Cat {
  name?: string;
  description?: string;
  image?: string;
}

function App() {
  const [cat, setCat] = useState<Cat>({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCat() {
    setIsLoading(true);
    try {
      const url = "https://api.freeapi.app/api/v1/public/cats/cat/random";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      const response = await fetch(url, options);
      const result = await response.json();
      setCat(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <CatCard cat={cat} isLoading={isLoading} />
          <div className="flex justify-center">
            <ActionButton onClick={fetchCat} isLoading={isLoading} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-white mt-12 py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-black font-medium">© 2026 Random Cat Viewer.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
