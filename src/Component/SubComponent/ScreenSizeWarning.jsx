import React from "react";

const ScreenSizeWarning = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 text-white text-center p-4 md:hidden">
      <div>
        <h1 className="text-2xl font-bold mb-4">Screen Too Small</h1>
        <p>
          Please open this website on a laptop or desktop for the best
          experience.
        </p>
      </div>
    </div>
  );
};

export default ScreenSizeWarning;
