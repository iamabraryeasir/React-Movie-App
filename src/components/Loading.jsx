import React from "react";

function Loading() {
  return (
    <div className="w-full min-h-[90dvh] flex items-center justify-center">
      <img
        className="animate-spin-slow "
        src="/loading.png"
        alt="Loading Image"
        width="100px"
      />
    </div>
  );
}

export default Loading;
