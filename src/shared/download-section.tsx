'use client';
import { useEffect, useState } from 'react';
import { Monitor, Apple } from 'lucide-react';

export function DownloadSection() {
  const [detectedOs, setDetectedOs] = useState<'windows' | 'macos' | 'linux' | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('win')) {
      setDetectedOs('windows');
    } else if (userAgent.includes('mac')) {
      setDetectedOs('macos');
    } else if (userAgent.includes('linux')) {
      setDetectedOs('linux');
    }
  }, []);

  const platforms = [
    {
      id: 'windows' as const,
      name: 'Windows',
      icon: <Monitor className="w-6 h-6 text-white" />,
      gradient: 'from-blue-400 to-cyan-400',
      hoverGradient: 'from-blue-500/20 to-cyan-500/20',
      hoverBorder: 'hover:border-blue-400/50',
      textHover: 'group-hover:text-blue-300'
    },
    {
      id: 'macos' as const,
      name: 'Mac Silicon',
      icon: <Apple className="w-6 h-6 text-white" />,
      gradient: 'from-purple-400 to-pink-400',
      hoverGradient: 'from-purple-500/20 to-pink-500/20',
      hoverBorder: 'hover:border-purple-400/50',
      textHover: 'group-hover:text-purple-300'
    },
    {
      id: 'linux' as const,
      name: 'Linux',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-1.5 0-2.8 1.2-2.8 2.7 0 .9.4 1.7 1.1 2.2-.1.2-.1.4-.1.6 0 .8.3 1.5.8 2 .5.5 1.2.8 2 .8s1.5-.3 2-.8c.5-.5.8-1.2.8-2 0-.2 0-.4-.1-.6.7-.5 1.1-1.3 1.1-2.2C14.8 3.2 13.5 2 12 2zm0 1.5c.7 0 1.3.6 1.3 1.3S12.7 6.1 12 6.1s-1.3-.6-1.3-1.3S11.3 3.5 12 3.5zM8.5 9c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zm7 0c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zM12 11c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm-3 2c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5s.5-.2.5-.5v-4c0-.3-.2-.5-.5-.5zm6 0c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5s.5-.2.5-.5v-4c0-.3-.2-.5-.5-.5z"/>
        </svg>
      ),
      gradient: 'from-orange-400 to-red-400',
      hoverGradient: 'from-orange-500/20 to-red-500/20',
      hoverBorder: 'hover:border-orange-400/50',
      textHover: 'group-hover:text-orange-300'
    }
  ];

  return (
    <div className="space-y-4">
      {platforms.map((platform) => {
        const isDetected = platform.id === detectedOs;
        
        return (
          <div key={platform.id} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r ${platform.hoverGradient} rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
            <div className={`relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-4 backdrop-blur-sm border transition-all duration-300 cursor-pointer group ${
              isDetected 
                ? 'border-purple-400/50' 
                : 'border-zinc-600/50'
            } ${platform.hoverBorder}`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${platform.gradient} rounded-lg flex items-center justify-center`}>
                  {platform.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold text-white ${platform.textHover} transition-colors`}>
                    {platform.name}
                  </h3>
                </div>
                <div className={`platform-badge bg-gradient-to-r ${platform.gradient} text-white text-xs px-3 py-1 rounded-full font-medium transition-opacity ${
                  isDetected ? 'opacity-100' : 'opacity-0'
                }`}>
                  Detected
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}