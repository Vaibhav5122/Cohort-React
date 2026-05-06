import { useState, useEffect } from "react";

const Card = () => {
  const [joke, setJoke] = useState("Click button to get joke");
  const [loading, setLoading] = useState(false);

  //fetch function
  const newJoke = async () => {
    setLoading(true);

    const url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";
    try {
      const response = await fetch(url);
      const data = await response.json();
      // adjust error

      setJoke(data.data.content || "No joke found");
    } catch (err) {
      setJoke("failed to fetch joke. Try again!");
    } finally { 
      setLoading(false);
    }
  };
  // fetch joke automatically when page load
  useEffect(() => {
    newJoke();
  }, []);

  return (
    <div className="mt-10">
      <div className="bg-purple-500 shadow-2xl flex gap-10 text-center items-center flex-col max-h-screen p-4 w-full max-w-3xl mx-auto px-4 rounded-3xl">
        <div
          id="joke"
          className="items-center text-shadow-lg/6 justify-center flex text-center text-2xl font-medium text-white min-h-20"
        >
          {loading ? "Thinking of something funny" : joke}

          <div
            id="loading"
            className={`h-10 w-10 ${loading ? "block" : "hidden"}`}
          >
            <svg
              viewBox="0 0 1024 1024"
              className=" animate-spin hover:animate-none text-white"
              fill="currentColor"
            >
              <path d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
            </svg>
          </div>
        </div>
        <div
          id="card-footer"
          className="flex items-center  w-full justify-evenly"
        >
          <button
            onClick={newJoke}
            disabled={loading}
            className="bg-orange-500 pl-4 pr-4 text-xl cursor-pointer p-2  rounded-4xl hover:bg-orange-600 hover:text-gray-200 text-center flex"
          >
            {loading ? "Loading..." : "Get new Joke"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import { useState, useEffect } from "react";

// const Card = () => {
//   // 1. Move state inside the component
//   const [joke, setJoke] = useState("Click the button to get a joke!");
//   const [loading, setLoading] = useState(false);

//   // 2. Define the fetch function
//   const fetchJoke = async () => {
//     setLoading(true);
//     const url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";
//     try {
//       const response = await fetch(url);
//       const resData = await response.json();
//       // Adjusting based on common freeapi response structure (data.content)
//       setJoke(resData.data.content || "No joke found");
//     } catch (err) {
//       setJoke("Failed to fetch a joke. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 3. Fetch a joke automatically when the page loads
//   useEffect(() => {
//     fetchJoke();
//   }, []);

//   return (
//     <div className="mt-10">
//       <div className="bg-purple-500 flex gap-6 text-center items-center flex-col p-8 w-full max-w-3xl mx-auto rounded-3xl shadow-xl">
//         {/* JOKE TEXT */}
//         <div
//           id="joke"
//           className="text-2xl font-medium text-white min-h-[80px] flex items-center"
//         >
//           {loading ? "Thinking of something funny..." : joke}
//         </div>

//         {/* LOADING SPINNER */}
//         <div
//           id="loading"
//           className={`h-10 w-10 ${loading ? "opacity-100" : "opacity-0"}`}
//         >
//           <svg
//             viewBox="0 0 1024 1024"
//             className="animate-spin text-white"
//             fill="currentColor"
//           >
//             <path d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
//           </svg>
//         </div>

//         <div
//           id="card-footer"
//           className="flex items-center bg-purple-600 w-full justify-between p-4 rounded-2xl"
//         >
//           <button
//             onClick={fetchJoke}
//             disabled={loading}
//             className="bg-orange-500 px-6 py-2 text-white font-bold rounded-full hover:bg-orange-600 transition-colors disabled:bg-gray-400"
//           >
//             {loading ? "Loading..." : "Get New Joke"}
//           </button>

//           <div className="flex gap-2">
//             {/* Simplify your Like/Dislike SVGs here */}
//             <button className="hover:text-blue-300 text-white">Like</button>
//             <button className="hover:text-red-300 text-white">Dislike</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
