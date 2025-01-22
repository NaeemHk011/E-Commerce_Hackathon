import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-black"></div>
        
        <h1 className="text-3xl text-black font-bold">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
