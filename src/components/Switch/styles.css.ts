import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { mainThemeSprinkles } from '../../themes';

export const switchRecipe = recipe({
  base: mainThemeSprinkles({
    display: 'flex',
    position: 'relative',
    border: 'normal',
    borderRadius: 'lg',
    width: '14',
    height: '7',
    padding: 'xxs',
  }),
  variants: {
    checked: {
      true: mainThemeSprinkles({
        borderColor: 'yellow',
      }),
      false: mainThemeSprinkles({
        borderColor: 'white',
      }),
    },
    disabled: {
      true: mainThemeSprinkles({
        cursor: 'default',
      }),
      false: mainThemeSprinkles({
        cursor: 'pointer',
      }),
    },
  },
  compoundVariants: [
    {
      variants: {
        checked: true,
        disabled: true,
      },
      style: mainThemeSprinkles({
        borderColor: 'yellow300',
      }),
    },
    {
      variants: {
        checked: false,
        disabled: true,
      },
      style: mainThemeSprinkles({
        borderColor: 'white300',
      }),
    },
  ],
});

export const switchMovingElementRecipe = recipe({
  base: mainThemeSprinkles({
    width: '4',
    height: '4',
    borderRadius: 'lg',
    margin: 'xxs',
  }),
  variants: {
    checked: {
      true: mainThemeSprinkles({
        backgroundColor: 'yellow',
        position: 'rt',
      }),
      false: mainThemeSprinkles({
        backgroundColor: 'white',
        position: 'lt',
      }),
    },
    disabled: {
      true: mainThemeSprinkles({
        backgroundColor: 'white300',
      }),
      false: mainThemeSprinkles({
        backgroundColor: 'white',
      }),
    },
  },
  compoundVariants: [
    {
      variants: {
        checked: true,
        disabled: true,
      },
      style: mainThemeSprinkles({
        backgroundColor: 'yellow300',
      }),
    },
    {
      variants: {
        checked: false,
        disabled: true,
      },
      style: mainThemeSprinkles({
        backgroundColor: 'white300',
      }),
    },
  ],
});

export type SwitchVariants = RecipeVariants<typeof switchRecipe>;
