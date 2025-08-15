// WebTester Theme Configuration  
export const theme = {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff', 
    300: '#d8b4fe',
    400: '#c084fc', // primary
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc', 
    400: '#e879f9', // secondary
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  // Tailwind class mappings
  classes: {
    gradientStart: 'violet-600',     // Main gradient start
    gradientEnd: 'fuchsia-500',      // Main gradient end
    accent: 'text-cyan-300',         // High contrast accent for text
    accentBg: 'bg-cyan-300',         // High contrast accent for backgrounds
    accentHover: 'hover:text-cyan-100',
    primary: 'text-cyan-400',        // Primary interactive elements
    primaryHover: 'hover:text-cyan-300', // Primary hover state
    primaryBg: 'bg-cyan-400',        // Primary background
    secondary: 'fuchsia-400',        // Secondary elements
    secondaryHover: 'fuchsia-300',   // Secondary hover state
    gradient: 'from-cyan-600 to-cyan-400',
    gradientHover: 'from-cyan-700/20 to-cyan-500/20',
    border: 'border-cyan-400/50',
    glow: 'from-cyan-500/10 to-cyan-400/10'
  }
};

export default theme;