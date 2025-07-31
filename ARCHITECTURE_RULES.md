# Architecture & Code Quality Rules

This file contains architectural patterns and code quality rules learned during development of the Tylt marketing website.

## Component Organization & Naming

### Directory Structure Rules
- **Never prefix component names with the directory name**
  - ❌ Bad: `info-page-hero.tsx`, `info-page-content.tsx`
  - ✅ Good: `info/hero.tsx`, `info/content.tsx`
- **Use nested directories for logical grouping**
  - Put related components in subdirectories: `shared/info/`, `shared/root/`
  - Keep component names clean and simple within their context

### Component Architecture
- **Build with reusable blocks, not reinventing each page**
  - Create shared layout components with consistent styling
  - Define Tailwind utility classes in components, not repeated inline
  - Reuse components across pages for consistency

## Page Types & Styling

### Two Distinct Page Types
1. **Root Pages** (interactive, colorful)
   - Use homepage as template - DO NOT CHANGE IT
   - Interactive choose-your-own-adventure style
   - More colorful and engaging

2. **Info Pages** (informational, subdirectory SEO pages)
   - Dark mode with zinc color palette
   - Blog/informational style
   - Less colorful, more professional
   - Long-tail directory keyword pages for SEO

### Color Palette Consistency
- **Info pages use zinc color scheme ONLY**
  - Background: `bg-zinc-900`, `bg-zinc-800`, `bg-zinc-700`
  - Borders: `border-zinc-600/30`, `border-zinc-500/30`
  - Text: `text-white`, `text-zinc-300`, `text-zinc-400`
  - Accents: `bg-zinc-500`, `bg-zinc-300`
- **Never use red/green comparison colors**
  - Use zinc variants for neutral comparisons
  - Maintain professional, consistent appearance

## Page Architecture Pattern

**Every route follows this structure:**
- **`layout.tsx`** - Server-side rendered layout with metadata
- **`page.tsx`** - Client component with page-specific logic
- **Page-specific components** - Specialized, non-shared components used only by that page

### Standard Info Page Structure
All info pages must follow this exact pattern:

```tsx
// layout.tsx (SSR)
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

// page.tsx (Client Component)
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
      {/* Page sections using shared components */}
      <Footer />
    </main>
  );
}
```

### Component Requirements
- **Header**: Always inside main scroll container with proper mainRef
- **Footer**: Always at bottom inside main container
- **Sections**: Use `h-dvh snap-start` for full viewport sections
- **Client Components**: Pages with Header/Footer must be client components

### Component Hierarchy Rules
- **Shared components** (`shared/`) - Reusable across multiple pages
  - `shared/default/` - Components for root/landing pages (colorful, interactive)
  - `shared/info/` - Components for info/SEO pages (zinc colors, professional)
  - `shared/buttons/` - Button components
  - `shared/ui/` - General UI elements
  - `shared/forms/` - Form components
- **Page-specific components** - Live alongside `page.tsx`, used only by that page
- **Never mix** - Page-specific components should not be in shared directories
- **Analytics** - Infrastructure components like `shared/analytics.tsx` apply globally

## Development Workflow

### Testing & Validation
- **Always test changes before declaring complete**
  - Run `npm run build` to catch errors
  - Don't assume changes work without verification
- **Fix ESLint issues**
  - Escape quotes properly: `&apos;` for apostrophes
  - Address all linting errors during build

### Code Quality Standards
- **Don't reinvent styling on every page**
  - Create reusable components with defined styles
  - Use shared components consistently across pages
- **Maintain consistent patterns**
  - Follow established directory structure
  - Use existing component patterns as templates
  - Don't create one-off solutions

## Content & Information Management

### Company Information
- **All company details are documented in CLAUDE.md**
  - Pricing, licensing, target customers, competitive advantages
  - Product capabilities, technical architecture, demo process
  - Refer to CLAUDE.md to avoid repetitive explanations
- **Don't repeat basic company info**
  - Check CLAUDE.md first before asking about Tylt details
  - Maintain consistency with documented information

## Remember
These rules exist because they solve real problems encountered during development. Follow them consistently to maintain code quality and avoid repeating architectural mistakes.