import React from "react";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-xl relative w-[90%] max-w-lg">
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
