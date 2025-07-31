# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 marketing website for Tylt built with the App Router and TypeScript. Key architectural decisions:

### Page Structure
- **Homepage (`src/app/page.tsx`)**: Interactive choose-your-own-adventure single-page application with snap-scroll sections
- **SEO Pages**: Static pages like `/pricing` and `/automated/website/testing/...` for search engine optimization
- Each section uses full viewport height (`h-dvh`) with snap-start scrolling
- All pages use the same scroll container pattern with hidden scrollbars

### Component Organization
- **Shared components** in `src/app/shared/`: Header, Footer, DemoModal, ScreenSection, etc.
- **Manager path components** in `src/app/manager/`: choice, cost, tenfold subdirectories
- **Worker path components** in `src/app/worker/`: choice, easier, faster subdirectories
- Each user journey has dedicated components (situation, payoff, tasks, results, onboarding, demo, cta)

### Page Layout Pattern
All pages follow this structure:
```tsx
'use client';
import { useRef } from 'react';
import { Header } from '../shared/header';
import { Footer } from '../shared/footer';

export default function Page() {
  const mainRef = useRef<HTMLElement>(null);
  
  return (
    <main 
      ref={mainRef}
      className="relative h-dvh overflow-y-scroll snap-mandatory snap-y scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <Header onReset={() => {}} selectedPath={null} mainRef={mainRef} />
      {/* Page sections */}
      <Footer />
    </main>
  );
}
```

### User Journey Flow
- Homepage presents role choice (management vs worker)
- Management path splits into "10x productivity" vs "cost reduction"
- Worker path splits into "work faster" vs "work easier"  
- Each path has dedicated components for the complete user journey
- State management uses React useState for role selection and path progression

### Styling System
- Tailwind CSS v4 with zinc color palette (zinc-900, zinc-800, zinc-700)
- Custom scroll behaviors with snap scrolling
- Full-screen sections with viewport units (`h-dvh`)
- Responsive design with sm:, md:, lg: breakpoints

### API Routes
- `/api/contact/route.ts` - Contact form submission via Postmark
- `/api/demo/route.ts` - Demo request handling
- `/api/waitlist/route.ts` - Waitlist signup
- Requires `POSTMARK_SERVER_TOKEN` environment variable

### Key Dependencies
- Next.js 15 with App Router and React 19
- `@headlessui/react` - Accessible UI components
- `react-select` - Form select components  
- `canvas-confetti` - Celebration animations
- `postmark` - Email delivery service
- Tailwind CSS v4 - Styling framework

## Tylt Company & Product Information

### What Tylt Is
- **Digital Worker**: AI agent that handles real computer tasks in browsers and desktop environments
- **Vision AI Technology**: Uses vision models to see and interact with websites/applications like a human
- **Plain English Interface**: Write automation instructions in natural language, not code
- **Local Execution**: Runs on Mac, Windows, Linux using real browsers (Chrome, Safari, Firefox)
- **Intelligent Adaptation**: Handles popups, layout changes, errors, and redesigns autonomously

**Core Capabilities:**
- Website and web application testing without brittle selectors
- Browser-based workflow automation 
- Desktop application automation
- Database operations (MongoDB, SQL, Vector)
- API integrations and custom tool development
- Research, data entry, and validation tasks

### Target Customers
1. **Management - Productivity Focus**: Managers with teams doing repetitive browser work, seeking 10x productivity gains
2. **Management - Cost Reduction**: Cost-conscious managers paying for manual labor, want to eliminate inefficiencies  
3. **Workers - Speed Focus**: Individual contributors wanting to get more done faster
4. **Workers - Ease Focus**: Individual contributors tired of repetitive work but want to maintain results/credit

### Pricing & Licensing Model
**Cost Structure:**
- Small businesses (under $250K revenue): AI model costs only, zero licensing fees forever
- Enterprise (over $250K revenue): Free for first 12 months, then negotiated per-seat licensing + AI model costs
- Model costs: Pennies for simple tasks, dollars for large batches
- Current: Anthropic API (beta), Future: Proprietary model 20% cheaper than Sonnet 4

**Open Source Benefits:**
- Full source code access for enterprise security auditing
- On-premises deployment (sensitive data never leaves infrastructure)
- No vendor lock-in, complete freedom to modify
- Deploy anywhere (on-premises, cloud, hybrid)

### Competitive Advantages
**vs. Traditional Testing Tools:**
- Vision AI vs. brittle DOM selectors that break with UI changes
- Real browsers vs. headless simulations
- Plain English vs. complex code maintenance
- Intelligent adaptation vs. rigid scripts
- 80-95% cost reduction in testing operations
- Open source transparency vs. vendor lock-in

### Demo & Onboarding Process
**Guided Setup & Training:**
1. Dedicated setup session with team installation
2. Identify 2-3 critical scenarios from current workflow
3. Live automation creation with expert training
4. Recorded sessions for reference
5. Email support and live screen sharing until autonomous
6. Expert team support throughout setup process

### Technical Architecture
- **Vision-based element detection** instead of DOM selectors
- **Real browser control** with desktop integration capabilities
- **Extensible Python architecture** for custom tool development
- **MCP Server support** for Model Context Protocol integration
- **Comprehensive tool ecosystem** for browser, data, and system operations