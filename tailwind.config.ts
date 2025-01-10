
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",       // Soft neutral background
        foreground: "#333333",       // Dark gray for text
        primary: "#007BFF",          // Bright blue for branding and CTAs
        secondary: "#6C757D",        // Muted gray for secondary elements
        accent: "#28A745",           // Vivid green for highlights and success states
        error: "#DC3545",            // Bold red for error states
        warning: "#FFC107",          // Warm yellow for warnings
        info: "#17A2B8",             // Calm cyan for informational messages
        lightBackground: "#FFFFFF",  // Pure white for light themes
        darkBackground: "#212529",   // Deep charcoal for dark themes
        link: "#0056B3",             // Strong blue for links
        hover: "#0056B3",            // Slightly darker blue for hover states
      },
      
      spacing: {
        small: "2rem",  // Custom spacing for margin, padding, etc.
        medium: "4rem",    // Example: Smaller margin or padding
        large: "8rem",    // Larger spacing option
      },
      fontFamily: {
        sen: ['Sen'], 
       
      },
      boxShadow: {
        card: "0 2px 6px rgba(0, 0, 0, 0.1)",  // Light shadow for cards
        hover: "0 2px 10px rgba(0, 0, 0, 0.15)",  // Hover effect shadow
      },
      fontSize: {
        xs: "0.75rem",     // Extra small text
        sm: "0.875rem",    // Small text
        base: "1rem",      // Base text size
        lg: "1.125rem",    // Large text
        xl: "1.25rem",     // Extra large text
        "2xl": "1.5rem",   // 2x large text
        "3xl": "2rem",     // Heading size
      },
      borderRadius: {
        default: "0.375rem",  // Default border radius for components
        lg: "0.5rem",         // Larger border radius for buttons, cards
        full: "9999px",       // Full circle for buttons/icons
      },
      transitionDuration: {
        DEFAULT: "200ms", // Default transition duration
        fast: "100ms",    // Fast transition for hover effects
        slow: "300ms",    // Slow transition for certain elements
      },
    },
  },

  plugins: [],
} satisfies Config;
