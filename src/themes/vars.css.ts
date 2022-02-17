import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const safeArea = {
  top: 'env(safe-area-inset-top)',
  right: 'env(safe-area-inset-right)',
  bottom: 'env(safe-area-inset-bottom)',
  left: 'env(safe-area-inset-left)',
};

export const themeVars = createGlobalTheme('#root', {
  palette: {
    transparent: 'rgba(0, 0, 0, 0)',
    black: 'rgba(0, 0, 0, 1)',
    black300: 'rgba(0, 0, 0, 0.3)',
    black600: 'rgba(0, 0, 0, 0.6)',
    white: 'rgba(255, 255, 255, 1)',
    white300: 'rgba(255, 255, 255, 0.3)',
    white600: 'rgba(255, 255, 255, 0.6)',
    green: 'rgba(43, 220, 36, 1)',
    gray: 'rgba(29, 29, 27, 1)',
    yellow: 'rgba(255, 213, 0, 1)',
    yellow300: 'rgba(255, 213, 0, 0.3)',
  },
  spaces: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  borderWidth: {
    light: '1px',
    normal: '2px',
  },
  borderRadius: {
    xs: '5px',
    sm: '10px',
    lg: '20px',
  },
  size: {
    '0': '0',
    '4': '1rem',
    '7': '1.75rem',
    '9': '2.25rem',
    '11': '2.75rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '50': '12.5rem',
    '64': '16rem',
  },
  blur: {
    normal: '20px',
  },
  fontSize: {
    info: '0.75rem',
    button: '1rem',
    header1: '1.875rem',
    header2: '1.375rem',
    header3: '1.125rem',
    header4: '1rem',
    body: '0.875rem',
  },
  zIndex: {
    message: '1200',
    info: '1100',
    modal: '1000',
  },
});

// TODO подумать куда вообще перенести эти стили
/**
 * CSS Reset begin
 *  https://www.joshwcomeau.com/css/custom-css-reset/
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
});

globalStyle('html, body, #root', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('button', {
  padding: 0,
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('#root', {
  isolation: 'isolate',
});
/**
 * CSS Reset end
 */

globalStyle('html', {
  fontFamily: 'Noto Sans',
});

globalStyle('body', {
  padding: 0,
  // TODO в будущем надо будет убрать это, потому что сейчас на iOS body больше чем доступный размер окна браузера
  width: '100vw',
  height: '100vh',
});

globalStyle('body #root', {
  width: '100%',
  height: '100%',
  position: 'fixed',
  backgroundColor: themeVars.palette.black,
});
