import React from 'react';

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1920&q=80"
          alt="背景图片"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24">
        <div className="relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center lg:text-left lg:col-span-6">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">找到你的</span>
                <span className="block text-primary-600">完美伴侣</span>
              </h1>
              <p className="mt-6 text-base text-gray-800 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                通过科学的测试方法，了解你们的契合度。我们的测试基于MBTI性格分析和核心价值观匹配，帮助你找到真正适合的人。
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  开始测试
                </button>
                <button className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  了解更多
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1516589091380-5d8e21be1859?auto=format&fit=crop&w=800&q=80"
                  alt="幸福的情侣"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 