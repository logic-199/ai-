import React from 'react';

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "完成测试",
      description: "花10分钟完成MBTI性格测试和价值观测试"
    },
    {
      number: "02",
      title: "获取报告",
      description: "系统生成详细的个人分析报告"
    },
    {
      number: "03",
      title: "匹配分析",
      description: "与伴侣的测试结果进行科学匹配分析"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            使用流程
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            简单三步，开启你的感情分析之旅
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection; 