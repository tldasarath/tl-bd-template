import React from 'react';
import demologo from '../../img/demologo.png';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white-50 to-white-100 z-50 overflow-hidden">
      <div className="relative w-36 h-36">
        <div className="w-full h-full animate-drive">
          <img src={demologo} alt="Kerala Drives logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold text-orange-600">Title Placeholder</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;