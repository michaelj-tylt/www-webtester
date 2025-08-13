'use client';
import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import { Monitor, Apple } from 'lucide-react';

export function DownloadButton() {
  const [detectedOs, setDetectedOs] = useState<'windows' | 'mac' | 'linux' | null>(null);
  const [selectedOs, setSelectedOs] = useState<'windows' | 'mac' | 'linux'>('windows');
  const [isExpanded, setIsExpanded] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    let os: 'windows' | 'mac' | 'linux' = 'windows';
    if (userAgent.includes('win')) {
      os = 'windows';
    } else if (userAgent.includes('mac')) {
      os = 'mac';
    } else if (userAgent.includes('linux')) {
      os = 'linux';
    }
    
    setDetectedOs(os);
    setSelectedOs(os);
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
      id: 'mac' as const,
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
          <path d="M22 12.65V11.85H20.05V7.4c0-.55-.45-1-1-1s-1 .45-1 1v4.45H16.1V7.4c0-.55-.45-1-1-1s-1 .45-1 1v4.45H12.15V7.4c0-.55-.45-1-1-1s-1 .45-1 1v4.45H8.2V7.4c0-.55-.45-1-1-1s-1 .45-1 1v4.45H4.25V7.4c0-.55-.45-1-1-1s-1 .45-1 1v4.45H1c-.55 0-1 .45-1 1v1.6c0 .55.45 1 1 1h1.25V18.6c0 .55.45 1 1 1s1-.45 1-1v-3.15H6.2V18.6c0 .55.45 1 1 1s1-.45 1-1v-3.15H10.15V18.6c0 .55.45 1 1 1s1-.45 1-1v-3.15H14.1V18.6c0 .55.45 1 1 1s1-.45 1-1v-3.15H18.05V18.6c0 .55.45 1 1 1s1-.45 1-1v-3.15H22c.55 0 1-.45 1-1z"/>
        </svg>
      ),
      gradient: 'from-orange-400 to-red-400',
      hoverGradient: 'from-orange-500/20 to-red-500/20',
      hoverBorder: 'hover:border-orange-400/50',
      textHover: 'group-hover:text-orange-300'
    }
  ];

  const handleDownloadClick = (platform: 'windows' | 'mac' | 'linux') => {
    posthog?.capture('download_button_clicked', {
      os: platform,
      detected_os: detectedOs,
      location: 'pricing_section'
    });
  };

  const selectedPlatform = platforms.find(p => p.id === selectedOs) || platforms[0];
  const otherPlatforms = platforms.filter(p => p.id !== selectedOs);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Selected platform - always visible */}
      <div className="relative group">
        <div className={`absolute inset-0 bg-gradient-to-r ${selectedPlatform.hoverGradient} rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
        <a
          href="https://github.com/WhyTylt/tylt-app/archive/refs/tags/v0.0.70.zip"
          className={`relative block bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-4 backdrop-blur-sm border border-zinc-600/50 ${selectedPlatform.hoverBorder} transition-all duration-300 cursor-pointer group`}
          onClick={(e) => {
            e.stopPropagation();
            handleDownloadClick(selectedPlatform.id);
          }}
        >
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${selectedPlatform.gradient} rounded-lg flex items-center justify-center`}>
              {selectedPlatform.icon}
            </div>
            <div className="flex-1">
              <h3 className={`text-lg font-bold text-white ${selectedPlatform.textHover} transition-colors`}>
                {selectedPlatform.name}
              </h3>
            </div>
            <div className="text-zinc-400">
              {isExpanded ? '▲' : '▼'}
            </div>
          </div>
        </a>
      </div>

      {/* Other platforms - show on hover/expand */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-1 space-y-1 z-50">
          {otherPlatforms.map((platform) => (
            <div key={platform.id} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.hoverGradient} rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
              <button
                className={`relative w-full bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-4 backdrop-blur-sm border border-zinc-600/50 ${platform.hoverBorder} transition-all duration-300 cursor-pointer group`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedOs(platform.id);
                  setIsExpanded(false);
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${platform.gradient} rounded-lg flex items-center justify-center`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold text-white ${platform.textHover} transition-colors`}>
                      {platform.name}
                    </h3>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}