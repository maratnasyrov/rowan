import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { mainThemeSprinkles } from '../../themes';

export const textRecipe = recipe({
  variants: {
    variant: {
      body: mainThemeSprinkles({
        font: 'body',
      }),
      info: mainThemeSprinkles({
        font: 'info',
      }),
      header1: mainThemeSprinkles({
        font: 'header1',
      }),
      header2: mainThemeSprinkles({
        font: 'header2',
      }),
      header3: mainThemeSprinkles({
        font: 'header3',
      }),
      button: mainThemeSprinkles({
        font: 'button',
      }),
    },
    color: {
      white: mainThemeSprinkles({
        color: 'white',
      }),
      yellow: mainThemeSprinkles({
        color: 'yellow',
      }),
      white300: mainThemeSprinkles({
        color: 'white300',
      }),
    },
    align: {
      left: mainThemeSprinkles({
        textAlign: 'left',
      }),
      center: mainThemeSprinkles({
        textAlign: 'center',
      }),
      right: mainThemeSprinkles({
        textAlign: 'right',
      }),
      justify: mainThemeSprinkles({
        textAlign: 'justify',
      }),
    },
  },
});

export type TextVariants = RecipeVariants<typeof textRecipe>;
