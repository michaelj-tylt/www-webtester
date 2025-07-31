'use client';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPageScroller = dynamic(() => import('react-page-scroller'), {
  ssr: false,
});
import { Header } from '@/shared/header';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { Hero } from '@/shared/hero-landing';
import { DownloadButton } from '@/shared/download-button';
import { ContactSalesButton } from '@/shared/contact-sales-button';
// import { DemoRequestContent } from '@/shared/demo-request';
import PixelBackground from '@/shared/react-bits/Backgrounds/PixelBackground/PixelBackground';
import Aurora from '@/shared/react-bits/Backgrounds/Aurora/Aurora';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0e1a] to-[#0f172a]" />
      <div className="fixed inset-0 z-0 opacity-60">
        <Aurora
          colorStops={["#5227FF", "#1E40AF", "#0F172A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="fixed inset-0 z-0 opacity-25">
        <PixelBackground
          gap={8}
          speed={60}
          colors="#5227FF,#3B82F6,#1E3A8A"
          autoStart={true}
        />
      </div>

      {/* Header */}
      <Header scrolled={currentPage > 0} />
      
      {/* Page Scroller */}
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
        animationTimer={1000}
        animationTimerBuffer={100}
        transitionTimingFunction="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        containerHeight="100vh"
        containerWidth="100vw"
        blockScrollUp={false}
        blockScrollDown={false}
        renderAllPagesOnFirstRender={false}
      >
        {/* Page 1: Hero */}
        <div 
          className="h-screen w-screen flex items-center justify-center relative z-10 text-white outline-none overflow-hidden"
          tabIndex={0}
          ref={(input) => {
            if (input) {
              input.focus();
            }
          }}
        >
          <Section isHero={true}>
            <Hero 
              primaryText="Throw away your headless test suites."
              secondaryText="Tylt interracts with your web applications the same way your users do, through a real browser."
              description=""
              audience="enterprise"
              containerRef={containerRef}
            />
          </Section>
        </div>

        {/* Page 2: Download */}
        <div className="h-screen w-screen flex items-center justify-center relative z-10 text-white overflow-hidden">
          <Section id="download">
            <Section.Heading size="xl">Download Tylt</Section.Heading>
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Section.Subheading>Get Started Today</Section.Subheading>
                <Section.Text size="sm">
                  Docker Desktop required. Supports Windows, Mac, and Linux (Mac/Linux use same run scripts).
                </Section.Text>
              </div>
              <div>
                <DownloadButton />
              </div>
            </div>
          </Section>
        </div>

        {/* Page 3: Problems */}
        <div className="h-screen w-screen flex items-center justify-center relative z-10 text-white overflow-hidden">
          <Section>
            <Section.Heading size="xl">The Problem with Current Testing Tools</Section.Heading>
            <Section.Grid cols="2">
              <Section.Card>
                <Section.Heading size="sm" card>Headless Testing is Fake Testing</Section.Heading>
                <Section.Text size="sm">Your customers don&apos;t use headless browsers. They use real Chrome, Safari, and Firefox with real rendering, real JavaScript, and real user interactions.</Section.Text>
              </Section.Card>
              <Section.Card>
                <Section.Heading size="sm" card>DOM Selectors Break Everything</Section.Heading>
                <Section.Text size="sm">Every time you change a class name, move a button, or update your design, your tests break. DOM-based testing is obsolete.</Section.Text>
              </Section.Card>
              <Section.Card>
                <Section.Heading size="sm" card>Esoteric Code Requirements</Section.Heading>
                <Section.Text size="sm">Playwright and Selenium require expensive, ever-changing, complicated code suites. Your tests become another codebase to maintain.</Section.Text>
              </Section.Card>
              <Section.Card>
                <Section.Heading size="sm" card>No Intelligence or Adaptation</Section.Heading>
                <Section.Text size="sm">Traditional tools can&apos;t handle popups, changed text, moved buttons, network errors, or site redesigns. One small change breaks everything.</Section.Text>
              </Section.Card>
            </Section.Grid>
          </Section>
        </div>

        {/* Page 4: Solution */}
        <div className="h-screen w-screen flex items-center justify-center relative z-10 text-white overflow-hidden">
          <Section>
            <Section.Heading size="xl">Tylt: Vision-Based Website Testing That Actually Works</Section.Heading>
            <Section.Text size="sm">Tylt can actually SEE your website and navigate it using a real browser on a real desktop using a mouse and keyboard - just like a real customer would.</Section.Text>
            <Section.Grid cols="3">
              <Section.Card>
                <Section.Heading size="sm" card>Vision AI That Actually Sees</Section.Heading>
                <Section.Text size="sm">Our powerful vision model sees your website like a human does - identifying buttons, forms, and content visually, not through fragile DOM selectors.</Section.Text>
              </Section.Card>
              <Section.Card>
                <Section.Heading size="sm" card>Plain English Instructions</Section.Heading>
                <Section.Text size="sm">Write tests in plain English. No code, no selectors, no technical syntax. Just describe what you want tested like you&apos;re talking to a person.</Section.Text>
              </Section.Card>
              <Section.Card>
                <Section.Heading size="sm" card>Intelligent & Adaptive</Section.Heading>
                <Section.Text size="sm">Tylt overcomes popups, changed text, moved buttons, network errors, and even whole site redesigns. It&apos;s an intelligent agent, not a brittle script.</Section.Text>
              </Section.Card>
            </Section.Grid>
          </Section>
        </div>

        {/* Page 5: Code Example */}
        <div className="h-screen w-screen flex items-center justify-center relative z-10 text-white overflow-hidden">
          <Section>
            <Section.Heading size="xl">Real Browser Testing in Plain English</Section.Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <div>
                <Section.Subheading>Before Tylt</Section.Subheading>
                <Section.Code>
                  <p>await page.locator(&apos;[data-testid=&quot;login-button&quot;]&apos;).click();</p>
                  <p>await page.fill(&apos;#username-input-field-id&apos;, &quot;user@test.com&quot;);</p>
                  <p>await page.fill(&apos;#password-input-field-id&apos;, &quot;password123&quot;);</p>
                  <p>await page.click(&apos;[data-testid=&quot;submit-button&quot;]&apos;);</p>
                  <p>await expect(page.locator(&apos;.welcome-message&apos;)).toBeVisible();</p>
                </Section.Code>
              </div>
              <div>
                <Section.Subheading>After Tylt</Section.Subheading>
                <Section.Code>
                  <p>Go to https://pageurl.domain</p>
                  <p>Enter &quot;user@test.com&quot; as the username</p>
                  <p>Enter &quot;password123&quot; as the password</p>
                  <p>Click login</p>
                  <p>Verify the welcome message appears</p>
                </Section.Code>
              </div>
            </div>
            <Section.Text size="sm">Tylt handles the rest - finding elements visually, dealing with loading states, and adapting to changes automatically.</Section.Text>
          </Section>
        </div>

        {/* Page 6: Pricing */}
        <div className="h-screen w-screen flex items-center justify-center relative z-10 text-white overflow-hidden">
          <Section>
            <Section.Heading size="xl">Simple, Transparent Pricing</Section.Heading>
            <Section.Text size="sm">Our pricing is easy - start free, then pay as you scale</Section.Text>
            <Section.Grid cols="2">
              <Section.Card>
                <Section.Subheading>For Everyone</Section.Subheading>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-blue-400">
                    Initial month: <span className="text-blue-400">$0/mo</span>
                  </div>
                  <div className="text-xl font-semibold">
                    After: <span className="text-white">$25/mo</span>
                  </div>
                  <div className="text-base text-zinc-300">
                    + Pay for model usage. Most tests are less than a penny
                  </div>
                  <div className="mt-6">
                    <DownloadButton />
                  </div>
                </div>
              </Section.Card>
              <Section.Card>
                <Section.Subheading>Enterprise</Section.Subheading>
                <div className="space-y-4">
                  <div className="text-xl font-semibold text-blue-400">
                    Custom Seat Pricing
                  </div>
                  <div className="text-base text-zinc-300">
                    Tailored pricing for teams and organizations
                  </div>
                  <div className="space-y-3">
                    <div className="text-base text-zinc-400">✓ Volume discounts available</div>
                    <div className="text-base text-zinc-400">✓ On-premises deployment</div>
                    <div className="text-base text-zinc-400">✓ Priority support</div>
                    <div className="text-base text-zinc-400">✓ Custom integrations</div>
                  </div>
                  <ContactSalesButton />
                </div>
              </Section.Card>
            </Section.Grid>
          </Section>
        </div>

        {/* Page 7: Footer */}
        <div className="h-screen w-screen flex items-center justify-center relative z-10 text-white overflow-hidden">
          <Footer />
        </div>
      </ReactPageScroller>
    </div>
  );
}