import { useEffect, useState } from "react";

type User = {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
  location: { city: string; country: string };
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    setLoading(true);
    setError("");

    try {
      const url = "https://api.freeapi.app/api/v1/public/randomusers";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data.data.data);
    } catch (fetchError) {
      setError("Failed to load users.");
      console.log(fetchError);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"></p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Random Users
            </h1>
            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              A minimal monochrome layout for browsing random people from the
              API.
            </p>
          </div>

          <button
            onClick={fetchData}
            className="inline-flex w-fit items-center justify-center rounded-full border border-black px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            Refresh
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3 text-sm text-gray-500">
          <span>{loading ? "Loading users" : `${users.length} profiles`}</span>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="h-60 bg-gray-100" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-2/3 rounded bg-gray-100" />
                  <div className="h-3 w-1/2 rounded bg-gray-100" />
                  <div className="h-3 w-3/4 rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-gray-200 p-8 text-center">
            <p className="text-sm font-medium text-gray-700">{error}</p>
            <button
              onClick={fetchData}
              className="mt-4 rounded-full border border-black px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <article
                key={user.login.uuid}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-4 p-4">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {user.name.first} {user.name.last}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">{user.email}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm text-gray-600">
                    <span>{user.location.city}</span>
                    <span>{user.location.country}</span>
                  </div>

                  <button className="w-full rounded-xl border border-black px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white">
                    View Profile
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
