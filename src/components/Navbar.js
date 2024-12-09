import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-primary-600 hover:text-primary-700 cursor-pointer">
              缘分测试
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              登录
            </button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200">
              注册
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 