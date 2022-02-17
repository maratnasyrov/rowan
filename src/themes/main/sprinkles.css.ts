import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { safeArea, themeVars } from '../vars.css';

const screenPortrait = 'screen and (orientation: portrait)' as const;
const screenLandscape = 'screen and (orientation: landscape)' as const;

const borderProperties = defineProperties({
  properties: {
    border: {
      none: 'none',
      light: {
        borderStyle: 'solid',
        borderWidth: themeVars.borderWidth.light,
      },
      normal: {
        borderStyle: 'solid',
        borderWidth: themeVars.borderWidth.normal,
      },
    },
    borderLeft: {
      normal: {
        borderLeftStyle: 'solid',
        borderLeftWidth: themeVars.borderWidth.normal,
      },
    },
    borderTop: {
      normal: {
        borderTopStyle: 'solid',
        borderTopWidth: themeVars.borderWidth.normal,
      },
    },
    borderRadius: {
      none: '0',
      ...themeVars.borderRadius,
    },
  },
});

const colorProperties = defineProperties({
  properties: {
    color: themeVars.palette,
    backgroundColor: themeVars.palette,
    borderColor: themeVars.palette,
    fill: themeVars.palette,
  },
});

const flexContentPositions = [
  'center',
  'flex-start',
  'flex-end',
  'space-evenly',
  'space-between',
] as const;

const flexItemPositions = ['center', 'flex-start', 'flex-end'] as const;

const flexProperties = defineProperties({
  conditions: {
    portrait: { '@media': screenPortrait },
    landscape: { '@media': screenLandscape },
  },
  defaultCondition: ['portrait', 'landscape'],
  properties: {
    display: ['flex'] as const,
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'] as const,
    flexWrap: ['wrap'] as const,
    justifyContent: flexContentPositions,
    justifyItems: flexItemPositions,
    alignContent: flexContentPositions,
    alignItems: flexItemPositions,
    gap: themeVars.spaces,
    columnGap: themeVars.spaces,
    flex: ['1'] as const,
  },
});

const spaces = {
  ...themeVars.spaces,
  none: '0px',
} as const;

const offsetProperties = defineProperties({
  conditions: {
    portrait: { '@media': screenPortrait },
    landscape: { '@media': screenLandscape },
  },
  defaultCondition: ['portrait', 'landscape'],
  properties: {
    paddingTop: { ...spaces, safe: `max(${spaces.xl}, ${safeArea.top})` },
    paddingRight: { ...spaces, safe: `max(${spaces.sm}, ${safeArea.right})` },
    paddingBottom: {
      ...spaces,
      safe: `max(${spaces.xxl}, ${safeArea.bottom})`,
    },
    paddingLeft: { ...spaces, safe: `max(${spaces.sm}, ${safeArea.left})` },
    marginTop: spaces,
    marginRight: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
  },
  shorthands: {
    padding: ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const size = {
  full: '100%',
  ...themeVars.size,
} as const;

const sizeProperties = defineProperties({
  conditions: {
    portrait: { '@media': screenPortrait },
    landscape: { '@media': screenLandscape },
  },
  defaultCondition: ['portrait', 'landscape'],
  properties: {
    width: { ...size, fullView: '100vw' },
    height: { ...size, fullView: '100vh' },
  },
  shorthands: {
    size: ['width', 'height'],
  },
});

const fontProperties = defineProperties({
  properties: {
    font: {
      inherit: {
        fontSize: 'inherit',
      },
      header1: {
        fontSize: themeVars.fontSize.header1,
        marginBlockEnd: themeVars.spaces.xs,
      },
      header2: {
        fontSize: themeVars.fontSize.header2,
        marginBlockEnd: themeVars.spaces.xs,
      },
      header3: {
        fontSize: themeVars.fontSize.header3,
        marginBlockEnd: themeVars.spaces.xs,
      },
      header4: {
        fontSize: themeVars.fontSize.header4,
      },
      body: {
        fontSize: themeVars.fontSize.body,
      },
      info: {
        fontSize: themeVars.fontSize.info,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: themeVars.fontSize.info,
      },
      button: {
        fontSize: themeVars.fontSize.button,
        fontWeight: 'bold',
      },
    },
    textAlign: ['left', 'center', 'right', 'justify'],
  },
});

const cursorProperties = defineProperties({
  properties: {
    cursor: {
      default: 'default',
      pointer: {
        cursor: 'pointer',
        ':disabled': {
          cursor: 'default',
          touchAction: 'none',
          pointerEvents: 'none',
        },
      },
    },
  },
});

const overflowProperties = defineProperties({
  properties: {
    overflow: {
      vertical: {
        overflow: 'hidden auto',
      },
      none: {
        overflow: 'hidden',
      },
    },
  },
});

const tableProperties = defineProperties({
  properties: {
    borderCollapse: ['collapse'],
  },
});

const positionProperties = defineProperties({
  conditions: {
    portrait: { '@media': screenPortrait },
    landscape: { '@media': screenLandscape },
  },
  defaultCondition: ['portrait', 'landscape'],
  properties: {
    position: {
      lt: {
        position: 'absolute',
        left: 0,
        top: 0,
      },
      lb: {
        position: 'absolute',
        left: 0,
        bottom: 0,
      },
      rt: {
        position: 'absolute',
        right: 0,
        top: 0,
      },
      rb: {
        position: 'absolute',
        right: 0,
        bottom: 0,
      },
      lrb: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      lrbt: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
      'l-sm': {
        position: 'absolute',
        left: themeVars.spaces.sm,
      },
      't-xl-safe': {
        position: 'absolute',
        top: `max(${themeVars.spaces.xl}, ${safeArea.top})`,
      },
      relative: {
        position: 'relative',
      },
    },
  },
});

const zIndexProperties = defineProperties({
  properties: {
    zIndex: themeVars.zIndex,
  },
});

const filterProperties = defineProperties({
  properties: {
    backdropFilter: {
      normal: `blur(${themeVars.blur.normal})`,
    },
  },
});

const transitionProperties = defineProperties({
  properties: {
    transition: {
      width: 'width 90s',
    },
  },
});

const opacityProperties = defineProperties({
  properties: {
    opacity: {
      hidden: {
        opacity: 0,
        width: 0,
        height: 0,
      },
    },
  },
});

export const mainThemeSprinkles = createSprinkles(
  borderProperties,
  colorProperties,
  offsetProperties,
  sizeProperties,
  fontProperties,
  cursorProperties,
  overflowProperties,
  flexProperties,
  tableProperties,
  positionProperties,
  filterProperties,
  transitionProperties,
  zIndexProperties,
  opacityProperties
);

export type MainThemeStyles = Parameters<typeof mainThemeSprinkles>[0];

export const flexSprinkles = createSprinkles(
  flexProperties,
  sizeProperties,
  offsetProperties,
  positionProperties,
  colorProperties,
  overflowProperties,
  zIndexProperties
);

export type FlexSprinklesProperties = Parameters<typeof flexSprinkles>[0];
