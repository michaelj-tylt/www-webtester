
import Link from "next/link";
import Image from "next/image";
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center relative text-white">
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0 order-2 lg:order-1">
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
        <div className="w-full lg:w-1/2 lg:pl-6 text-left order-1 lg:order-2">
          <div className="space-y-6 sm:space-y-8">
            {/* Main headline with gradient */}
            <h1 className="section-heading">
              <span className="section-gradient-primary">
                Ready to
              </span>
              <br />
              <span className="section-gradient-secondary">
                Get Started?
              </span>
            </h1>
            
            {/* Subtitle with elegant styling */}
            <div className="relative">
              <p className="section-subheading">
                Throw those headless tests in the trash and use Tylt instead!
              </p>
              {/* Subtle accent line */}
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60 hidden lg:block"></div>
            </div>
            
            <p className="section-text">Made with ❤️ in sunny San Diego.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
