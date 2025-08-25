// Typography constants extracted from Figma design
export const TYPOGRAPHY = {
  // Font Families
  FONTS: {
    PRIMARY: 'Poppins, sans-serif',
    DISPLAY: 'Abril Fatface, serif',
    SECONDARY: 'Rubik, sans-serif',
    BODY: 'Lato, sans-serif',
  },

  // Font Weights
  WEIGHTS: {
    REGULAR: 400,
    SEMIBOLD: 600,
  },

  // Font Sizes
  SIZES: {
    DISPLAY: '90px',
    H1: '56px',
    H2: '48px',
    H3: '40px',
    BODY: '24px',
    CAPTION: '20px',
  },

  // Line Heights
  LINE_HEIGHTS: {
    DISPLAY: '1.35em',
    HEADING: '1.5em',
    BODY: '1.5em',
    CAPTION: '1.4em',
  },

  // Text Styles
  STYLES: {
    DISPLAY: {
      fontFamily: 'Abril Fatface, serif',
      fontWeight: 400,
      fontSize: '90px',
      lineHeight: '1.35em',
      textTransform: 'uppercase' as const,
    },
    H1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '56px',
      lineHeight: '1.5em',
      textTransform: 'uppercase' as const,
    },
    H2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '1.5em',
      textTransform: 'uppercase' as const,
    },
    H3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '40px',
      lineHeight: '1.5em',
      textTransform: 'uppercase' as const,
    },
    BODY: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '1.5em',
      textTransform: 'uppercase' as const,
    },
    CAPTION: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '1.4em',
      textTransform: 'uppercase' as const,
    },
  },
} as const;

// CSS Custom Properties for Typography
export const TYPOGRAPHY_CSS_VARS = `
  --font-primary: ${TYPOGRAPHY.FONTS.PRIMARY};
  --font-display: ${TYPOGRAPHY.FONTS.DISPLAY};
  --font-secondary: ${TYPOGRAPHY.FONTS.SECONDARY};
  --font-body: ${TYPOGRAPHY.FONTS.BODY};
  
  --font-weight-regular: ${TYPOGRAPHY.WEIGHTS.REGULAR};
  --font-weight-semibold: ${TYPOGRAPHY.WEIGHTS.SEMIBOLD};
  
  --font-size-display: ${TYPOGRAPHY.SIZES.DISPLAY};
  --font-size-h1: ${TYPOGRAPHY.SIZES.H1};
  --font-size-h2: ${TYPOGRAPHY.SIZES.H2};
  --font-size-h3: ${TYPOGRAPHY.SIZES.H3};
  --font-size-body: ${TYPOGRAPHY.SIZES.BODY};
  --font-size-caption: ${TYPOGRAPHY.SIZES.CAPTION};
  
  --line-height-display: ${TYPOGRAPHY.LINE_HEIGHTS.DISPLAY};
  --line-height-heading: ${TYPOGRAPHY.LINE_HEIGHTS.HEADING};
  --line-height-body: ${TYPOGRAPHY.LINE_HEIGHTS.BODY};
  --line-height-caption: ${TYPOGRAPHY.LINE_HEIGHTS.CAPTION};
`;