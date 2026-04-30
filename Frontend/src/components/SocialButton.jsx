import React from 'react';

const SocialButton = ({ icon, label, onClick, provider }) => {
  const getProviderConfig = () => {
    switch (provider) {
      case 'google':
        return {
          label: 'Google',
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          )
        };
      case 'apple':
        return {
          label: 'Apple',
          icon: (
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-black/80">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-43.8-22.1-75.3-21-42.3 1.5-81.1 26.1-102.8 63.9-46 80-11.7 191.6 32.5 255.4 21.6 31.2 47.3 65.9 81.3 64.7 32.5-1.2 45.3-21.3 84.6-21.3 39.4 0 51.3 21.3 85 20.6 34.6-.6 56.4-31.2 78.1-62.7 24.7-36.1 34.9-71.1 35.3-72.9-.8-.4-68.1-26.1-68.4-104.1zM249.1 82.5c16.3-20 27.2-47.8 24.2-75.5-23.3 1-51.5 15.6-68.2 35.2-15 17.5-28.2 45.7-24.7 72.3 26 2.1 52.5-12 68.7-32z" />
            </svg>
          )
        };
      default:
        return { icon, label };
    }
  };

  const config = getProviderConfig();

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex items-center justify-center gap-3 bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors py-3 rounded-2xl border border-transparent active:scale-[0.98]"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {config.icon}
      </div>
      <span className="text-sm font-bold text-slate-700">{config.label}</span>
    </button>
  );
};

export default SocialButton;
