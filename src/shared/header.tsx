"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePostHog } from 'posthog-js/react';

interface HeaderProps {
  scrolled?: boolean;
}

export function Header({ scrolled = false }: HeaderProps) {
  const posthog = usePostHog();

  const handleDownloadClick = () => {
    posthog?.capture('download_button_clicked', {
      location: 'header',
      button_text: 'Download'
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-1" : "py-4"
      }`}
      style={{
        height: scrolled ? '40px' : 'auto',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className={`flex items-center transition-all duration-300 hover:opacity-80 ${
            scrolled ? "gap-2" : "gap-3"
          }`}>
          <Image
            src="/logo.png"
            alt="Tylt Logo"
            width={scrolled ? 28 : 48}
            height={scrolled ? 28 : 48}
            className="transition-all duration-300"
          />
          {/* out logo IS our name, stop addit ing as text again! */}
        </Link>

        {/* Navigation */}
        <nav
          className={`flex items-center gap-6 transition-all duration-300 ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          <a
            href="https://github.com/WhyTylt/tylt-app/archive/refs/tags/v0.0.70.zip"
            className={`text-white hover:text-orange-400 transition-colors duration-200 relative ${
              scrolled ? "text-sm" : "text-base"
            }`}
            onClick={handleDownloadClick}
          >
            <span className="relative">Download</span>
          </a>
          <a
            href="https://github.com/WhyTylt/tylt-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-white hover:text-yellow-400 transition-colors duration-200 ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            <svg 
              className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} transition-all duration-300`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
            </svg>
            <span>Star us</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
