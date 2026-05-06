import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";

interface Quote {
  id: string;
  content: string;
  author: string;
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchQuotes() {
    const url = "https://api.freeapi.app/api/v1/public/quotes";
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setQuotes(result.data.data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-cyan-300 rounded-full animate-spin"></div>
              <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
            </div>
          </div>
        ) : quotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No quotes available</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-12 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>
            © 2026 Words of Wisdom. All quotes are inspiring and educational.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
