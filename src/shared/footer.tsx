
import Link from "next/link";
import Image from "next/image";
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="min-h-screen w-full flex items-center justify-center relative text-white">
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        {/* Contact section */}
        <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
          <div className="relative">
            {/* Subtle glow effect behind contact - hidden on mobile */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transform -rotate-1"></div>
            <div className="relative sm:bg-gradient-to-br sm:from-zinc-900/50 sm:to-zinc-800/30 sm:rounded-2xl p-0 sm:p-6 sm:backdrop-blur-sm sm:border sm:border-zinc-700/50">
              <div className="space-y-4 sm:space-y-6">
                {/* Logo */}
                <div className="flex justify-start">
                  <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/logo.png"
                      alt="Tylt Logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </div>
                
                {/* Contact links */}
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:hello@gotylt.com"
                    className="flex items-center text-zinc-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    <span>hello@gotylt.com</span>
                  </a>
                  
                  <a
                    href="https://gotylt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-zinc-400 hover:text-white transition-colors"
                  >
                    gotylt.com
                  </a>
                  
                  <a 
                    href="https://github.com/WhyTylt/tylt-app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                
                {/* Copyright */}
                <div className="border-t border-zinc-700/50 pt-4">
                  <p className="text-zinc-400 text-sm">
                    © {new Date().getFullYear()} Tylt. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text section */}
        <div className="flex-1 lg:pl-12 text-left">
          <div className="space-y-6 sm:space-y-8">
            {/* Main headline with gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] sm:leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Ready to
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Get Started?
              </span>
            </h1>
            
            {/* Subtitle with elegant styling */}
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-300 leading-relaxed font-light max-w-2xl">
                Throw those headless tests in the trash and use Tylt instead!
              </p>
              {/* Subtle accent line */}
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60 hidden lg:block"></div>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl">Made with ❤️ in sunny San Diego.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
