import React from "react";

function ErrorMsg({ massage }) {
  return (
    <div className="w-full min-h-[90dvh] flex items-center justify-center">
      <div className="text-white">{massage}</div>
    </div>
  );
}

export default ErrorMsg;
