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
    <div className="relative">
      {/* Selected platform - always visible */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-600/10 to-zinc-500/10 rounded-xl blur-lg opacity-50"></div>
        <div
          className={`relative block bg-gradient-to-br from-zinc-800/40 to-zinc-700/30 rounded-xl p-4 backdrop-blur-sm border border-zinc-600/30 transition-all duration-300 cursor-not-allowed opacity-60`}
        >
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${selectedPlatform.gradient} rounded-lg flex items-center justify-center`}>
              {selectedPlatform.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-zinc-400">
                {selectedPlatform.name}
              </h3>
              <p className="text-sm text-zinc-500 mt-1">Coming Soon</p>
            </div>
            <div className="platform-badge bg-zinc-600 text-zinc-300 text-xs px-3 py-1 rounded-full font-medium">
              Disabled
            </div>
          </div>
        </div>
      </div>

      {/* Release note */}
      <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
        <p className="text-sm text-zinc-400 text-center">
          <span className="text-blue-400 font-medium">Release Date:</span> Monday, August 18th
          <br />
          Binaries for Windows, Mac, and Linux will be available for download.
        </p>
      </div>
    </div>
  );
}