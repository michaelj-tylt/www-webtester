'use client';
import { useEffect, useState } from 'react';
// import { Section } from '@/shared/section';
import { usePostHog } from 'posthog-js/react';

export function DownloadButton() {
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | null>(null);
  const posthog = usePostHog();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('win')) {
      setOs('windows');
    } else if (userAgent.includes('mac')) {
      setOs('mac');
    } else if (userAgent.includes('linux')) {
      setOs('linux');
    } else {
      setOs('windows'); // Default fallback
    }
  }, []);

  if (!os) return null;

  const getButtonText = () => {
    switch (os) {
      case 'windows':
        return 'Download for Windows';
      case 'mac':
        return 'Download for Mac';
      case 'linux':
        return 'Download for Linux';
      default:
        return 'Download Tylt';
    }
  };

  const handleDownloadClick = () => {
    posthog?.capture('download_button_clicked', {
      os: os,
      button_text: getButtonText(),
      location: 'download_section'
    });
  };

  return (
    <a 
      href="https://github.com/WhyTylt/tylt-app/archive/refs/tags/v0.0.70.zip" 
      className="inline-block bg-gradient-to-b from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-3 rounded-full transition-all text-base"
      onClick={handleDownloadClick}
    >
      {getButtonText()}
    </a>
  );
}