import React from 'react';

function Footer() {
  const footerLinks = {
    关于我们: ['公司介绍', '联系我们', '加入我们'],
    服务内容: ['测试服务', '咨询服务', '会员服务'],
    帮助中心: ['常见问题', '用户指南', '隐私政策'],
    联系方式: ['客服电话', '商务合作', '意见反馈']
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-primary-500 mb-4">
              缘分测试
            </div>
            <p className="text-base text-gray-400">
              © 2023 缘分测试. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 