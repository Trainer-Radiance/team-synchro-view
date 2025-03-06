
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-synchro-950 dark:via-synchro-900 dark:to-synchro-950 opacity-80"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-pink-100 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMGYwZjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMHoiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-10 dark:opacity-5"></div>
    </div>
  );
};

export default AnimatedBackground;
