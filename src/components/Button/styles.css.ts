import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { mainThemeSprinkles } from '../../themes';

export const buttonRecipe = recipe({
  base: mainThemeSprinkles({
    cursor: 'pointer',
    font: 'button',
    overflow: 'none',
  }),
  variants: {
    type: {
      transparent: mainThemeSprinkles({
        backgroundColor: 'transparent',
        width: 'full',
        height: '11',
        border: 'none',
      }),
      textSmall: mainThemeSprinkles({
        width: '16',
        height: '9',
        border: 'normal',
        borderRadius: 'sm',
        backgroundColor: 'black300',
      }),
      textLarge: mainThemeSprinkles({
        width: '24',
        height: '11',
        border: 'normal',
        borderRadius: 'sm',
        backgroundColor: 'black300',
      }),
      boxSmall: mainThemeSprinkles({
        width: '11',
        height: '11',
        border: 'normal',
        borderRadius: 'sm',
        backgroundColor: 'black300',
      }),
      boxLarge: mainThemeSprinkles({
        width: '24',
        height: '20',
        border: 'normal',
        borderRadius: 'lg',
        backgroundColor: 'black300',
      }),
    },
    color: {
      white: mainThemeSprinkles({
        color: 'white',
        borderColor: 'white',
      }),
      yellow: mainThemeSprinkles({
        color: 'yellow',
        borderColor: 'yellow',
      }),
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
