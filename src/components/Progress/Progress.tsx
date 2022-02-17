import React, { useMemo } from 'react';

import { mainThemeSprinkles } from '../../themes';

export type ProgressProps = {
  value?: number;
  animated?: boolean;
};

const Progress: React.FC<ProgressProps> = ({ animated = true, value = 0 }) => {
  const progressValue = useMemo(() => (value > 100 ? 100 : value), [value]);

  return (
    <div className={mainThemeSprinkles({ size: 'full' })}>
      <div
        role="progressbar"
        aria-label="progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressValue}
        style={{ width: `${progressValue}%` }}
        className={mainThemeSprinkles({
          backgroundColor: 'green',
          height: 'full',
          transition: animated ? 'width' : undefined,
        })}
      />
    </div>
  );
};

export default Progress;
