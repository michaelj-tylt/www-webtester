# Styling Rules & Design System

This file contains all styling rules, color palettes, and design patterns for the Tylt marketing website.

## Core Styling Philosophy

### Tailwind Utility Classes in Components
- **Keep all utility classes IN the markup within shared components**
- **One place to debug both markup and styling** - don't separate them
- **Never extract styles to separate CSS files** for component-specific styling
- **Components contain their complete styling definition**

### Component-Based Design System
- **All styling should be defined in reusable shared components**
- **Consistent patterns through component reuse, not style repetition**
- **Each component encapsulates its complete visual definition**

## Page Type Design Systems

### Root Pages (Homepage Style)
**Color Palette:**
- Background base: `bg-black`
- Section backgrounds: Gradients and rich colors
- Text primary: `text-white`
- Text secondary: `text-white/80`, `text-white/70`
- Interactive elements: Colorful gradients and animations

**Layout Patterns:**
```tsx
// Main scroll container
className="relative h-dvh overflow-y-scroll snap-mandatory snap-y scroll-smooth"
style={{ 
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
  WebkitOverflowScrolling: 'touch',
  scrollSnapType: 'y mandatory'
}}

// Section structure
className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden snap-start snap-always"
```

**Typography Scale:**
- Hero titles: `text-4xl sm:text-6xl md:text-7xl font-bold`
- Section titles: `text-3xl sm:text-5xl font-bold`
- Body text: `text-lg`, `text-xl`
- Small text: `text-sm`

### Info Pages (SEO/Blog Style)
**Color Palette (Zinc-based):**
- Primary background: `bg-zinc-900`
- Secondary background: `bg-zinc-800`
- Tertiary background: `bg-zinc-700`
- Card backgrounds: `bg-zinc-800/30`, `bg-zinc-700/30`
- Borders: `border-zinc-600/30`, `border-zinc-500/30`
- Text primary: `text-white`
- Text secondary: `text-zinc-300`
- Text muted: `text-zinc-400`, `text-zinc-500`
- Accent dots: `bg-zinc-500`, `bg-zinc-300`

**Layout Patterns:**
```tsx
// Section wrapper
className="h-dvh snap-start flex items-center justify-center bg-zinc-900"

// Content container
className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12"

// Card/comparison containers
className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8"
```

## Typography System

### Font Hierarchy
- **Hero Titles**: `text-5xl sm:text-7xl md:text-8xl font-bold mb-16 leading-tight text-white`
- **Section Titles**: `text-3xl sm:text-5xl font-bold mb-12 text-white`
- **Subsection Titles**: `text-2xl font-bold text-white mb-6`
- **Subtitle Text**: `text-2xl sm:text-3xl text-zinc-400 mb-16`
- **Body Text**: `text-lg text-zinc-300`
- **Small Text**: `text-sm text-zinc-400`

### Responsive Breakpoints
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+) 
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)

## Layout & Spacing System

### Container Widths
```tsx
// Content containers by use case
maxWidth: {
  narrow: 'max-w-3xl',   // Single column text
  medium: 'max-w-4xl',   // Hero sections
  wide: 'max-w-6xl',     // Multi-column content
  full: 'max-w-7xl'      // Full-width sections
}

// Standard padding
className="px-4 sm:px-6 lg:px-12"
```

### Spacing Scale
- **Section spacing**: `mb-12`, `mb-16`, `mb-20`
- **Element spacing**: `mb-4`, `mb-6`, `mb-8`
- **Grid gaps**: `gap-8`, `gap-12`, `gap-16`
- **Padding**: `p-6`, `p-8`, `p-10`, `p-12`

### Viewport & Scroll Behavior
```tsx
// Full viewport sections
className="h-dvh snap-start"

// Scroll container (pages)
style={{ 
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
  WebkitOverflowScrolling: 'touch',
  scrollSnapType: 'y mandatory'
}}
```

## Component Visual Patterns

### Cards & Containers
```tsx
// Standard card
className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8"

// Highlighted card  
className="bg-zinc-700/30 border border-zinc-500/30 rounded-lg p-8"

// Subtle container
className="bg-zinc-700/50 backdrop-blur-sm border border-zinc-600/50 rounded-lg p-6"
```

### Interactive Elements
```tsx
// Primary button
className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-zinc-200 transition-colors"

// Secondary button
className="inline-flex items-center px-8 py-4 border border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors"

// List bullets
className="w-2 h-2 bg-zinc-300 rounded-full"
```

### Gradients (Root Pages Only)
```tsx
// Purple-blue gradient (CTA sections)
className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"

// Use gradients ONLY on root/homepage style pages
// NEVER use gradients on info pages - stick to zinc colors
```

## Color Usage Rules

### Forbidden Combinations
- **NEVER use red/green for comparisons** - use zinc variants instead
- **NO bright colors on info pages** - zinc palette only
- **NO random color choices** - follow established palette

### Color Application
```tsx
// Comparison sections (info pages)
negative: 'bg-zinc-800/30 border-zinc-600/30'  // Darker
positive: 'bg-zinc-700/30 border-zinc-500/30'  // Lighter

// Text hierarchy
primary: 'text-white'        // Headings
secondary: 'text-zinc-300'   // Body text
muted: 'text-zinc-400'       // Supporting text
subtle: 'text-zinc-500'      // Least important
```

## Grid & Layout Patterns

### Standard Grid Layouts
```tsx
// Two column (pricing, comparisons)
className="grid md:grid-cols-2 gap-8"
className="grid md:grid-cols-2 gap-12"
className="grid md:grid-cols-2 gap-16"

// Three column (features)
className="grid md:grid-cols-3 gap-8"

// Responsive considerations
// Always stack on mobile, expand on md+
```

### Flexbox Patterns
```tsx
// Center everything
className="flex items-center justify-center"

// Vertical stack with centering
className="flex flex-col items-center gap-12"

// Horizontal button groups
className="flex flex-col sm:flex-row gap-4 justify-center items-center"
```

## Animation & Transitions
```tsx
// Standard transitions
className="transition-colors"          // Color changes
className="transition-all duration-200" // Quick interactions
className="transition-all duration-300" // Standard animations

// Hover states
className="hover:bg-white/10"          // Subtle background
className="hover:bg-zinc-200"          // Button backgrounds
className="hover:opacity-80"           // Image/icon hovers
```

## Accessibility & Usability
- **Always include hover states** for interactive elements
- **Use semantic HTML structure** within components
- **Maintain sufficient color contrast** with zinc palette
- **Responsive design** - mobile-first approach with breakpoints

## Implementation Guidelines
1. **Define styles in shared components**, not in page files
2. **Use established color variables**, don't hardcode new colors
3. **Follow spacing scale**, don't use arbitrary values
4. **Test responsive behavior** at all breakpoints
5. **Maintain consistency** - use existing patterns as templates