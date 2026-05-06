interface Quote {
  id: string;
  content: string;
  author: string;
}

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-slate-700 hover:border-purple-500">
      {/* Accent bars */}
      <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-red-500 to-transparent rounded-full"></div>

      {/* Quote mark icon */}
      <div className="text-6xl text-yellow-400 opacity-20 font-serif mb-4 leading-none">
        "
      </div>

      {/* Quote content */}
      <p className="text-lg md:text-xl text-white leading-relaxed font-light mb-6 group-hover:text-purple-100 transition-colors">
        {quote.content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-indigo-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {quote.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-400">— {quote.author}</p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-r from-red-600/10 to-indigo-600/10 pointer-events-none"></div>
    </div>
  );
};

export default QuoteCard;
