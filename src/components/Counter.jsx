
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b14] p-4">
      <div className="w-full max-w-sm rounded-3xl border border-purple-500/20 bg-[#12121f] p-8 text-center shadow-2xl shadow-purple-900/20">

        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          React Counter
        </h2>

        <p className="mb-6 text-sm text-gray-400">
          Click the button to increase
        </p>

        <div className="mb-8 flex h-36 items-center justify-center rounded-2xl border border-purple-500/20 bg-[#0b0b14]">
          <h1 className="text-7xl font-bold text-white transition-all duration-300">
            {count}
          </h1>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="w-full rounded-xl bg-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-600/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-purple-500/40 active:scale-95"
        >
          + Count
        </button>

        <button
          onClick={() => setCount(0)}
          className="mt-3 w-full rounded-xl border border-gray-700 px-6 py-3 font-medium text-gray-400 transition duration-300 hover:border-purple-500 hover:text-purple-400 active:scale-95"
        >
          Reset
        </button>

        <p className="mt-6 text-xs text-gray-500">
          Keep counting!
        </p>

      </div>
    </div>
  );
}

export default Counter;