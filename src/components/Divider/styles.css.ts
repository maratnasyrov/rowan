import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { mainThemeSprinkles } from '../../themes';

export const dividerRecipe = recipe({
  base: mainThemeSprinkles({
    marginX: 'none',
    marginY: 'none',
  }),
  variants: {
    type: {
      vertical: mainThemeSprinkles({
        borderLeft: 'normal',
        height: 'full',
        width: '0',
      }),
      horizontal: mainThemeSprinkles({
        borderTop: 'normal',
        width: 'full',
        height: '0',
      }),
    },
    color: {
      white300: mainThemeSprinkles({
        borderColor: 'white300',
      }),
      white600: mainThemeSprinkles({
        borderColor: 'white600',
      }),
    },
  },
});

export type DividerVariants = RecipeVariants<typeof dividerRecipe>;
