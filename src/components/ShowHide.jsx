
import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);
  const [password , setPassword] = useState("")

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b14] p-4">
      <div className="w-full max-w-sm rounded-2xl border border-purple-500/20 bg-[#12121f] p-6 shadow-xl shadow-purple-900/20">

        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          🔐 Password
        </h1>

        <label className="mb-2 block text-sm text-gray-400">
          Enter your password
        </label>

        <div className="flex items-center gap-2 rounded-xl border border-gray-700 bg-[#0b0b14] px-4 focus-within:border-purple-500">
           <input type={show ? "text" : "password"} 
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-600"
           />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-sm font-semibold text-purple-400 transition hover:text-purple-300"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Password length: {password.length}
        </p>

      </div>
    </div>
  );
}

export default ShowHide;