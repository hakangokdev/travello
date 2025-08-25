import { COLORS, COLORS_CSS_VARS } from './colors';
import { TYPOGRAPHY, TYPOGRAPHY_CSS_VARS } from './typography';

// Complete theme configuration combining colors and typography
export const THEME = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  
  // Spacing system (based on 8px grid)
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  
  // Border radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  
  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
} as const;

// Complete CSS custom properties
export const THEME_CSS_VARS = `
  ${COLORS_CSS_VARS}
  ${TYPOGRAPHY_CSS_VARS}
  
  --spacing-xs: ${THEME.spacing.xs};
  --spacing-sm: ${THEME.spacing.sm};
  --spacing-md: ${THEME.spacing.md};
  --spacing-lg: ${THEME.spacing.lg};
  --spacing-xl: ${THEME.spacing.xl};
  --spacing-xxl: ${THEME.spacing.xxl};
  --spacing-xxxl: ${THEME.spacing.xxxl};
  
  --border-radius-sm: ${THEME.borderRadius.sm};
  --border-radius-md: ${THEME.borderRadius.md};
  --border-radius-lg: ${THEME.borderRadius.lg};
  --border-radius-xl: ${THEME.borderRadius.xl};
  --border-radius-full: ${THEME.borderRadius.full};
  
  --shadow-sm: ${THEME.shadows.sm};
  --shadow-md: ${THEME.shadows.md};
  --shadow-lg: ${THEME.shadows.lg};
  --shadow-xl: ${THEME.shadows.xl};
  
  --breakpoint-mobile: ${THEME.breakpoints.mobile};
  --breakpoint-tablet: ${THEME.breakpoints.tablet};
  --breakpoint-desktop: ${THEME.breakpoints.desktop};
  --breakpoint-wide: ${THEME.breakpoints.wide};
`;

// Utility function to inject CSS variables into the document
export const injectThemeVariables = (): void => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `:root { ${THEME_CSS_VARS} }`;
    document.head.appendChild(style);
  }
};

// Media query helpers
export const mediaQueries = {
  mobile: `@media (min-width: ${THEME.breakpoints.mobile})`,
  tablet: `@media (min-width: ${THEME.breakpoints.tablet})`,
  desktop: `@media (min-width: ${THEME.breakpoints.desktop})`,
  wide: `@media (min-width: ${THEME.breakpoints.wide})`,
  
  // Max-width queries
  maxMobile: `@media (max-width: ${parseInt(THEME.breakpoints.tablet) - 1}px)`,
  maxTablet: `@media (max-width: ${parseInt(THEME.breakpoints.desktop) - 1}px)`,
  maxDesktop: `@media (max-width: ${parseInt(THEME.breakpoints.wide) - 1}px)`,
} as const;

// Component-specific theme configurations
export const COMPONENT_THEMES = {
  button: {
    primary: {
      backgroundColor: THEME.colors.PRIMARY.MAIN,
      color: THEME.colors.TEXT.WHITE,
      padding: `${THEME.spacing.md} ${THEME.spacing.xl}`,
      borderRadius: THEME.borderRadius.md,
      fontSize: THEME.typography.SIZES.BODY,
      fontWeight: THEME.typography.WEIGHTS.SEMIBOLD,
      fontFamily: THEME.typography.FONTS.PRIMARY,
    },
    secondary: {
      backgroundColor: THEME.colors.ACCENT.GREEN.DARK,
      color: THEME.colors.TEXT.WHITE,
      padding: `${THEME.spacing.md} ${THEME.spacing.xl}`,
      borderRadius: THEME.borderRadius.md,
      fontSize: THEME.typography.SIZES.BODY,
      fontWeight: THEME.typography.WEIGHTS.SEMIBOLD,
      fontFamily: THEME.typography.FONTS.PRIMARY,
    },
  },
  
  card: {
    default: {
      backgroundColor: THEME.colors.BACKGROUND.WHITE,
      borderRadius: THEME.borderRadius.lg,
      boxShadow: THEME.shadows.md,
      padding: THEME.spacing.xl,
    },
    accent: {
      backgroundColor: THEME.colors.ACCENT.GREEN.LIGHT,
      borderRadius: THEME.borderRadius.lg,
      boxShadow: THEME.shadows.sm,
      padding: THEME.spacing.xl,
      border: `1px solid ${THEME.colors.ACCENT.GREEN.DARK}`,
    },
  },
  
  text: {
    display: THEME.typography.STYLES.DISPLAY,
    h1: THEME.typography.STYLES.H1,
    h2: THEME.typography.STYLES.H2,
    h3: THEME.typography.STYLES.H3,
    body: THEME.typography.STYLES.BODY,
    caption: THEME.typography.STYLES.CAPTION,
  },
} as const;

export default THEME;