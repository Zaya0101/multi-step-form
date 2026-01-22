import { useState } from "react";

function step4() {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8 mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <img src="/pinecone.png" alt="Logo" className="w-6 h-6" />
            <h2 className="text-xl text-black font-semibold">You're All Set</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}
export default step4;
