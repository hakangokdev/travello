// Colors constants extracted from Figma design
export const COLORS = {
  // Primary Colors
  PRIMARY: {
    MAIN: '#177BA5',
    BLUE: '#177BA5',
  },

  // Background Colors
  BACKGROUND: {
    PRIMARY: '#F6F6F6',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
  },

  // Text Colors
  TEXT: {
    PRIMARY: '#292D32',
    SECONDARY: '#292929',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    LIGHT: '#F5F5F5',
  },

  // Accent Colors
  ACCENT: {
    GREEN: {
      LIGHT: '#D6EDEB',
      DARK: '#2D8985',
    },
    PINK: {
      LIGHT: '#FCDDEC',
      DARK: '#F178B6',
    },
  },

  // Semantic Colors
  GRAY: {
    PRIMARY: '#292D32',
    SECONDARY: '#292929',
    LIGHT: '#F5F5F5',
    BACKGROUND: '#F6F6F6',
  },

  // Brand Colors
  BRAND: {
    PRIMARY: '#177BA5',
    SECONDARY: '#2D8985',
    ACCENT_1: '#F178B6',
    ACCENT_2: '#D6EDEB',
    ACCENT_3: '#FCDDEC',
  },
} as const;

// Color Palette organized by usage
export const COLOR_PALETTE = {
  // Main brand color
  MAIN: '#177BA5',
  
  // Background colors
  BG_PRIMARY: '#F6F6F6',
  BG_WHITE: '#FFFFFF',
  BG_BLACK: '#000000',
  
  // Text colors
  TEXT_PRIMARY: '#292D32',
  TEXT_SECONDARY: '#292929',
  TEXT_WHITE: '#FFFFFF',
  TEXT_LIGHT: '#F5F5F5',
  
  // Accent colors
  GREEN_LIGHT: '#D6EDEB',
  GREEN_DARK: '#2D8985',
  PINK_LIGHT: '#FCDDEC',
  PINK_DARK: '#F178B6',
} as const;

// CSS Custom Properties for Colors
export const COLORS_CSS_VARS = `
  --color-primary: ${COLORS.PRIMARY.MAIN};
  --color-primary-blue: ${COLORS.PRIMARY.BLUE};
  
  --color-bg-primary: ${COLORS.BACKGROUND.PRIMARY};
  --color-bg-white: ${COLORS.BACKGROUND.WHITE};
  --color-bg-black: ${COLORS.BACKGROUND.BLACK};
  
  --color-text-primary: ${COLORS.TEXT.PRIMARY};
  --color-text-secondary: ${COLORS.TEXT.SECONDARY};
  --color-text-white: ${COLORS.TEXT.WHITE};
  --color-text-black: ${COLORS.TEXT.BLACK};
  --color-text-light: ${COLORS.TEXT.LIGHT};
  
  --color-accent-green-light: ${COLORS.ACCENT.GREEN.LIGHT};
  --color-accent-green-dark: ${COLORS.ACCENT.GREEN.DARK};
  --color-accent-pink-light: ${COLORS.ACCENT.PINK.LIGHT};
  --color-accent-pink-dark: ${COLORS.ACCENT.PINK.DARK};
  
  --color-gray-primary: ${COLORS.GRAY.PRIMARY};
  --color-gray-secondary: ${COLORS.GRAY.SECONDARY};
  --color-gray-light: ${COLORS.GRAY.LIGHT};
  --color-gray-background: ${COLORS.GRAY.BACKGROUND};
  
  --color-brand-primary: ${COLORS.BRAND.PRIMARY};
  --color-brand-secondary: ${COLORS.BRAND.SECONDARY};
  --color-brand-accent-1: ${COLORS.BRAND.ACCENT_1};
  --color-brand-accent-2: ${COLORS.BRAND.ACCENT_2};
  --color-brand-accent-3: ${COLORS.BRAND.ACCENT_3};
`;

// Utility function to get color with opacity
export const getColorWithOpacity = (color: string, opacity: number): string => {
  // Remove # if present
  const hex = color.replace('#', '');
  
  // Parse hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Color combinations for common UI patterns
export const COLOR_COMBINATIONS = {
  PRIMARY_BUTTON: {
    background: COLORS.PRIMARY.MAIN,
    text: COLORS.TEXT.WHITE,
    hover: getColorWithOpacity(COLORS.PRIMARY.MAIN, 0.8),
  },
  SECONDARY_BUTTON: {
    background: COLORS.ACCENT.GREEN.DARK,
    text: COLORS.TEXT.WHITE,
    hover: getColorWithOpacity(COLORS.ACCENT.GREEN.DARK, 0.8),
  },
  ACCENT_BUTTON: {
    background: COLORS.ACCENT.PINK.DARK,
    text: COLORS.TEXT.WHITE,
    hover: getColorWithOpacity(COLORS.ACCENT.PINK.DARK, 0.8),
  },
  CARD_LIGHT: {
    background: COLORS.ACCENT.GREEN.LIGHT,
    text: COLORS.TEXT.PRIMARY,
    border: COLORS.ACCENT.GREEN.DARK,
  },
  CARD_PINK: {
    background: COLORS.ACCENT.PINK.LIGHT,
    text: COLORS.TEXT.PRIMARY,
    border: COLORS.ACCENT.PINK.DARK,
  },
} as const;