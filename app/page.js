"use client";

export default function HomePage() {
  function handleWelcome() {
    alert("Welcome to Addis Eats!");
  }

  return (
    <main className="mx-auto max-w-4xl p-6 min-h-screen flex flex-col justify-center items-center text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-3 tracking-tight">
          Addis Eats 🍽️
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Discover delicious local meals and place your order quickly and securely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={handleWelcome}
            className="w-full sm:w-auto rounded-xl bg-purple-700 px-6 py-3 text-white font-medium shadow-md hover:bg-purple-800 transition-all duration-200"
          >
            Welcome
          </button>

          <a
            href="/menu"
            className="w-full sm:w-auto rounded-xl bg-purple-50 text-purple-700 border border-purple-200 px-6 py-3 font-medium hover:bg-purple-100 transition-all duration-200 text-center"
          >
            View Menu
          </a>

          <a
            href="/checkout"
            className="w-full sm:w-auto rounded-xl bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-all duration-200 text-center"
          >
            Checkout
          </a>
        </div>
      </div>
    </main>
  );
}