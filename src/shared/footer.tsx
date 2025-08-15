
import Link from "next/link";
import Image from "next/image";
import { Mail } from 'lucide-react'
import theme from '../theme';

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center relative text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left side - Main content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zinc-300 max-w-lg">
              Stop wasting time on repetitive work and automate it with Tylt instead!
            </p>
            <a
              href="mailto:hello@gotylt.com"
              className="inline-block text-zinc-400 hover:text-white transition-colors"
            >
              hello@gotylt.com
            </a>
          </div>
          
          {/* Right side - Product links */}
          <div className="flex-shrink-0">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
              
              <a 
                href={process.env.NEXT_PUBLIC_MAIN_URL}
                className="block text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                About Tylt
              </a>
              
              <a 
                href={process.env.NEXT_PUBLIC_SIDEKICK_URL}
                className="block text-sky-400 hover:text-sky-300 transition-colors"
              >
                Sidekick
              </a>
              
              <a 
                href={process.env.NEXT_PUBLIC_AUTOTESTER_URL}
                className="block text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                AutoTester
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-700/50 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Tylt. Made with ❤️ in sunny San Diego.
          </p>
        </div>
      </div>
    </footer>
  );
}
