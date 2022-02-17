import { Meta, Story } from '@storybook/react';
import React from 'react';

import Description from '../Description';
import ImageInfo, { ImageInfoProps } from './ImageInfo';

export default {
  component: ImageInfo,
  title: 'components/rules/ImageInfo',
  args: {
    // TODO: заменить в будущем на какое то другое изображение, подумать какое и откуда
    src: 'https://rules.test.releaseband.com/en/paytables/witch_treasures/images/9_hu961ea338010759597094e494b6871071_36192_0x128_resize_box_2.png',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as Meta;

const TemplateText: Story<ImageInfoProps & { description: Array<string> }> = ({
  src,
  description,
}) => (
  <ImageInfo src={src}>
    {description.map(text => (
      <Description key={text}>{text}</Description>
    ))}
  </ImageInfo>
);

export const TextDescription = TemplateText.bind({});
TextDescription.args = {
  description: [
    '3 or more Scatter symbols in any position trigger the Free Games Feature.',
    'Image description 2.',
    'Image description 3.',
  ],
};
TextDescription.argTypes = {
  description: {
    description: 'Image description',
    control: { type: 'object' },
  },
};
