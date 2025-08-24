import React, { useState } from "react";

const Poll = () => {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  const total = votesA + votesB;
  const percentA = total ? (votesA / total) * 100 : 0;
  const percentB = total ? (votesB / total) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">📊 Poll Voting App</h1>

      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setVotesA(votesA + 1)}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700  transition"
        >
          Vote for A
        </button>
        <button
          onClick={() => setVotesB(votesB + 1)}
          className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700  transition"
        >
          Vote for B
        </button>
      </div>


      {/* this container holds to progress bar */}
      <div className="flex gap-14">
      
        <div className="flex flex-col items-center">
          <div className="w-16 h-64 bg-blue-100 rounded-md overflow-hidden flex items-end">
            <div
              className="w-full bg-blue-600 transition-all duration-500"
              style={{ height: `${percentA}%` }}
            />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">
            A: {votesA} ({percentA.toFixed(0)}%)
          </p>
        </div>

      
        <div className="flex flex-col items-center">
          <div className="w-16 h-64 bg-green-100 rounded-md overflow-hidden flex items-end">
            <div
              className="w-full bg-green-600 transition-all duration-500"
              style={{ height: `${percentB}%` }}
            />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">
            B: {votesB} ({percentB.toFixed(0)}%)
          </p>
        </div>
      </div>

      <p className="mt-6 text-gray-600">Total votes: {total}</p>
    </div>
  );
};

export default Poll;
