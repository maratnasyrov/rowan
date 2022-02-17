import { recipe } from '@vanilla-extract/recipes';

import { mainThemeSprinkles } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const listItemRecipe = recipe({
  base: mainThemeSprinkles({
    color: 'white',
    font: 'body',
  }),
  variants: {
    marked: {
      false: {
        listStyleType: 'none',
      },
    },
  },
});
