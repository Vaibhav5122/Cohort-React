const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 bg-blue-500  rounded-full animate-spin"></div>
        <div className="absolute inset-2 bg-slate-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
