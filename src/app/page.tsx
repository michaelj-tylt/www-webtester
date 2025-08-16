'use client';
import { PageLayout } from '@/shared/page-layout';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { Hero } from '@/shared/hero-landing';
// import { DemoRequestContent } from '@/shared/demo-request';
import { FaWindows, FaApple } from 'react-icons/fa';
import { SiLinux } from 'react-icons/si';
import theme from '@/shared/themes/webtester';

export default function HomePage() {
  return (
    <PageLayout 
      homeUrl="/"
      auroraColors={["#8B5CF6", "#7C3AED", "#0F172A"]}
      pixelColors="#8B5CF6,#A855F7,#7C3AED"
      theme={theme}
      appName="WebTester"
    >
        {/* Page 1: Hero */}
        <div 
          className="min-h-screen w-full flex items-center justify-center relative text-white snap-start"
        >
          <Section isHero={true}>
            <Hero 
              primaryText="Throw away your headless test suites."
              secondaryText="Tylt WebTester interacts with your web applications the same way your users do, through a real browser."
              description=""
              audience="enterprise"
            />
          </Section>
        </div>

        {/* Page 2: Download */}
        <div id="download" className="min-h-screen w-full flex items-center justify-center relative text-white snap-start">
          <Section>
            {/* Text section - TOP ON MOBILE, RIGHT ON DESKTOP */}
            <div className="flex flex-col lg:flex-row items-start justify-start">
              <div className="flex-1 lg:order-2 text-left mb-8 lg:mb-0">
                <div className="space-y-6 sm:space-y-8">
                  {/* Main headline with gradient */}
                  <h1 className="section-heading">
                    <span className="section-gradient-primary">
                      Download
                    </span>
                    <br />
                    <span className="section-gradient-secondary">
                      Tylt WebTester
                    </span>
                  </h1>
                  
                  {/* Subtitle with elegant styling */}
                  <div className="relative">
                    <p className="section-subheading">
                      Get Started Today
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl mt-4">
                      Docker Desktop required.
                    </p>
                    {/* Subtle accent line */}
                    <div className={`absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                  </div>
                </div>
              </div>

              {/* Download options section - BOTTOM ON MOBILE, LEFT ON DESKTOP */}
              <div className="flex-1 lg:order-1 lg:pr-12 w-full">
                <div className="relative">
                  {/* Subtle glow effect behind download options - hidden on mobile */}
                  <div className={`hidden sm:block absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform rotate-1`}></div>
                  <div className="relative sm:bg-gradient-to-br sm:from-zinc-900/50 sm:to-zinc-800/30 sm:rounded-2xl p-0 sm:p-6 sm:backdrop-blur-sm sm:border sm:border-zinc-700/50">
                    {/* Platform download options */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Windows */}
                      <div id="download-windows" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <FaWindows size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Windows</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* macOS */}
                      <div id="download-macos" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <FaApple size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Mac Silicon</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Linux */}
                      <div id="download-linux" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <SiLinux size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Linux</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Release date message */}
                    <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                      <p className="text-sm text-zinc-400 text-center">
                        <span className={`${theme.classes.primary} font-medium`}>Release Date:</span> Monday, August 18th
                        <br />
                        Binaries for Windows, Mac, and Linux will be available for download.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 3: Problems */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="section-heading">
                  <span className="section-gradient-primary">
                    The Problem with
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Current Testing Tools
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="section-subheading">
                    Traditional testing tools are broken. They rely on brittle DOM selectors, headless environments, and complex code that breaks with every UI change.
                  </p>
                  {/* Subtle accent line */}
                  <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                </div>
              </div>
            </div>
            
            {/* Problems section */}
            <div className="flex-1">
              <div className="relative">
                {/* Subtle glow effect behind problems */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                  <div className="space-y-6">
                    {/* Problem 1 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Headless Testing is Fake Testing</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Your customers don&apos;t use headless browsers. They use real Chrome, Safari, and Firefox with real rendering, real JavaScript, and real user interactions.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 2 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>DOM Selectors Break Everything</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Every time you change a class name, move a button, or update your design, your tests break. DOM-based testing is obsolete.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 3 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Esoteric Code Requirements</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Playwright and Selenium require expensive, ever-changing, complicated code suites. Your tests become another codebase to maintain.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 4 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>No Intelligence or Adaptation</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Traditional tools can&apos;t handle popups, changed text, moved buttons, network errors, or site redesigns. One small change breaks everything.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Page 4: Solution */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="section-heading">
                  <span className="section-gradient-primary">
                    Tylt: Vision-Based Testing
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    That Actually Works
                  </span>
                </h2>
                <p className="section-subheading  max-w-4xl">
                  Tylt WebTester can actually SEE your website and navigate it using a real browser on a real desktop using a mouse and keyboard - just like a real customer would.
                </p>
              </div>
              
              {/* Feature cards grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Vision AI That Actually Sees</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Our powerful vision model sees your website like a human does - identifying buttons, forms, and content visually, not through fragile DOM selectors.</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Plain English Instructions</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Write tests in plain English. No code, no selectors, no technical syntax. Just describe what you want tested like you&apos;re talking to a person.</p>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Intelligent & Adaptive</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Tylt overcomes popups, changed text, moved buttons, network errors, and even whole site redesigns. It&apos;s an intelligent agent, not a brittle script.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 5: Code Example */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="section-heading">
                  <span className="section-gradient-primary">
                    Real Browser Testing
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    in Plain English
                  </span>
                </h2>
              </div>
              
              {/* Code comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before Tylt */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme.classes.accent}`}>Before Tylt WebTester</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-base space-y-3 border border-zinc-700/50">
                    <p className="text-zinc-300">await page.locator(&apos;[data-testid=&quot;login-button&quot;]&apos;).click();</p>
                    <p className="text-zinc-300">await page.fill(&apos;#username-input-field-id&apos;, &quot;user@test.com&quot;);</p>
                    <p className="text-zinc-300">await page.fill(&apos;#password-input-field-id&apos;, &quot;password123&quot;);</p>
                    <p className="text-zinc-300">await page.click(&apos;[data-testid=&quot;submit-button&quot;]&apos;);</p>
                    <p className="text-zinc-300">await expect(page.locator(&apos;.welcome-message&apos;)).toBeVisible();</p>
                  </div>
                </div>
                
                {/* After Tylt */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme.classes.accent}`}>After Tylt WebTester</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-base space-y-3 border border-zinc-700/50">
                    <p className="text-zinc-300">Go to https://pageurl.domain</p>
                    <p className="text-zinc-300">Enter &quot;user@test.com&quot; as the username</p>
                    <p className="text-zinc-300">Enter &quot;password123&quot; as the password</p>
                    <p className="text-zinc-300">Click login</p>
                    <p className="text-zinc-300">Verify the welcome message appears</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom text */}
              <div className="text-left">
                <p className="section-subheading  max-w-4xl">
                  Tylt WebTester handles the rest - finding elements visually, dealing with loading states, and adapting to changes automatically.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 6: Pricing */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="section-heading">
                  <span className="section-gradient-primary">
                    Simple, Transparent
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Pricing
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="section-subheading">
                    Our pricing is easy - start free, then pay as you scale
                  </p>
                  {/* Subtle accent line */}
                  <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                </div>
              </div>
            </div>
            
            {/* Pricing section */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* For Everyone */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${theme.classes.accent}`}>For Everyone</h3>
                      <div className={`text-2xl font-bold ${theme.classes.primary}`}>
                        Initial month: <span className={`${theme.classes.primary}`}>$0/mo</span>
                      </div>
                      <div className="text-xl font-semibold">
                        After: <span className="text-white">$25/mo</span>
                      </div>
                      <div className="text-base text-zinc-300">
                        + Pay for model usage. Most tests are less than a penny
                      </div>
                      <div className="mt-4">
                        <a 
                          href="#download"
                          className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enterprise */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform rotate-1`}></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${theme.classes.accent}`}>Enterprise</h3>
                      <div className={`text-xl font-semibold ${theme.classes.primary}`}>
                        Custom Seat Pricing
                      </div>
                      <div className="text-base text-zinc-300">
                        Tailored pricing for teams and organizations
                      </div>
                      <div className="space-y-2">
                        <div className="text-base text-zinc-400">✓ Volume discounts available</div>
                        <div className="text-base text-zinc-400">✓ On-premises deployment</div>
                        <div className="text-base text-zinc-400">✓ Priority support</div>
                        <div className="text-base text-zinc-400">✓ Custom integrations</div>
                      </div>
                      <div className="text-right">
                        <a 
                          href="mailto:hello@gotylt.com?subject=Enterprise%20Pricing%20Inquiry"
                          className={`${theme.classes.primary} hover:${theme.classes.primaryHover} transition-colors text-sm`}
                        >
                          Contact Sales →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <Footer />
          </Section>
        </div>
    </PageLayout>
  );
}