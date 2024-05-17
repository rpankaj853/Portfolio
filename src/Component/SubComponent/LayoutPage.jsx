import React from 'react';

const LayoutPage = ({ sections, activePage }) => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8">
      <div className="relative flex flex-col items-center space-y-8">
        {sections.map((section, index) => (
          <div key={section.id} className="relative flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${activePage === section.id ? ' bg-customLightAqua' : 'bg-gray-400'}`}></div>
            <span className={`absolute left-full ml-2 text-1xl font-bold ${activePage === section.id ? ' text-customLightAqua' : 'text-gray-400'}`}>
              {section.name}
            </span>
            {index < sections.length - 1 && (
              <div className="w-1 bg-slate-300 h-8 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutPage;
