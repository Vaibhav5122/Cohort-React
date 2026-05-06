import { useState, useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // fetch call

  const apiFetch = async () => {
    setLoading(true);

    // Usage:
    // console.log(formatYearAgo("2023-07-19T13:16:33Z"));

    const url = "https://api.freeapi.app/api/v1/public/youtube/videos";

    try {
      const response = await fetch(url);
      const resData = await response.json();

      setData(resData.data.data || []);
    } catch (err) {
      setError("Url Error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    apiFetch();
  }, []);
  if (loading)
    return (
      <div className="text-white mt-20 text-center">Loading videos...</div>
    );
  if (error)
    return <div className="text-red-400 mt-20 text-center">{error}</div>;

  return (
    <div className="w-full bg-black py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
        {data.map((vid: any, index: number) => (
          <div
            key={vid?.items?.id || index}
            className="group cursor-pointer transition-all duration-200"
          >
            {/* Thumbnail Container */}

            <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden mb-3 group-hover:rounded-2xl transition-all">
              <a
                href={`https://youtube.com/watch?v=${vid?.items?.id} `} //https://www.youtube.com/watch?v=75hqPk6pq5g
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={vid?.items.snippet.thumbnails.medium.url}
                    alt={vid?.items.snippet.title}
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                {vid?.items?.contentDetails?.duration
                  ?.replace("PT", "")
                  .replace("S", "")
                  .replace("M", ":")
                  .replace("H", ":")}
              </div>
            </div>

            {/* Content Container */}
            <div className="flex gap-2">
              {/* Channel Avatar */}
              <div className="w-9 h-9 rounded-full bg-gray-700 flex-shrink-0 mt-1"></div>

              {/* Text Container */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-gray-300 transition-colors">
                  {vid?.items.snippet.title}
                </h3>

                {/* Channel Name */}
                <p className="text-xs text-gray-400 mt-1 hover:text-gray-300">
                  {vid?.items.snippet.channelTitle}
                </p>

                {/* Views and Date */}
                <p className="text-xs text-gray-500 mt-1">
                  {vid?.items.statistics.viewCount?.toLocaleString()} views •{" "}
                  {new Date().getFullYear() -
                    new Date(vid.items?.snippet.publishedAt).getFullYear() ===
                  0
                    ? "this year"
                    : `${new Date().getFullYear() - new Date(vid.items?.snippet.publishedAt).getFullYear()} years ago`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
