import React from 'react';

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="igGradient" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGradient)" />
      <path
        d="M12 7A5 5 0 1012 17 5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6z"
        fill="white"
      />
      <circle cx="16.5" cy="7.5" r="1.1" fill="white" />
      <path
        d="M16 3H8C5.24 3 3 5.24 3 8v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5zm3.2 13c0 1.76-1.44 3.2-3.2 3.2H8c-1.76 0-3.2-1.44-3.2-3.2V8c0-1.76 1.44-3.2 3.2-3.2h8c1.76 0 3.2 1.44 3.2 3.2v8z"
        fill="white"
      />
    </svg>
  );
};
