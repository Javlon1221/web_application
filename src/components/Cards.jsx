import React, { useEffect, useState } from "react";

const USERS = "https://dummyjson.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8); // dastlab nechta user ko'rsatiladi

  useEffect(() => {
    fetch(USERS)
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Xatolik:", err))
      .finally(() => setLoading(false));
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Foydalanuvchilar</h1>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-center text-xl font-semibold text-blue-600">
            Yuklanmoqda...
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.slice(0, visibleCount).map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
              >
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-center">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-center text-gray-600">{user.email}</p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  {user.address.city}, {user.address.state}
                </p>
              </div>
            ))}
          </div>

          {/* Sea More tugmasi: agar hali ham ko'rsatilmagan userlar bo'lsa */}
          {visibleCount < users.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showMore}
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Sea More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
