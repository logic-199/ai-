import React from 'react';

function FeatureSection() {
  const features = [
    {
      title: "科学的测试方法",
      description: "基于MBTI性格分析和核心价值观测试，提供准确的匹配结果"
    },
    {
      title: "详细的分析报告",
      description: "生成全面的契合度分析，包括性格匹配、价值观契合等多个维度"
    },
    {
      title: "专业的建议指导",
      description: "针对测试结果提供专业的关系建议和改善方向"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            特色功能
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            科学的匹配系统
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            我们提供全面的测试和分析，帮助你更好地了解感情关系
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {feature.description}
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

export default FeatureSection;