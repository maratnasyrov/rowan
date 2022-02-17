import React from 'react';

import { themeVars } from '../../themes';
import icons from './icons';

export type IconProps = {
  icon: keyof typeof icons;
  color?: keyof typeof themeVars.palette;
};

const Icon: React.FC<IconProps> = ({ icon, color = 'white' }) => {
  const { width, height, paths } = icons[icon];
  const fill = themeVars.palette[color];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map(path => (
        <path key={path} fill={fill} d={path} />
      ))}
    </svg>
  );
};

export default Icon;
