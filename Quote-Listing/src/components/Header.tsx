const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-teal-900 to-slate-900 py-20 px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-4">
          Words of Wisdom
        </h1>
        <p className="text-xl text-gray-300 font-light">
          Daily inspiration to fuel your journey
        </p>
      </div>
    </header>
  );
};

export default Header;
