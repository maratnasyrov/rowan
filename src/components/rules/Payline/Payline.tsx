import React, { useMemo } from 'react';

import { themeVars } from '../../../themes';

const rectSize = 16;

const calcSize = (value: number) => value * rectSize;

const buildRects = (
  reels: number,
  rows: number,
  line: ReadonlyArray<number>
): ReadonlyArray<{
  x: number;
  y: number;
  isFill: boolean;
}> =>
  Array.from({ length: reels }, (_, reel) => reel).flatMap(reel =>
    Array.from({ length: rows }, (_, row) => row).map(row => ({
      x: calcSize(reel),
      y: calcSize(row),
      isFill: line[reel] === row,
    }))
  );

export type PaylineProps = {
  reels: number;
  rows: number;
  line: Array<number>;
};

const Payline: React.FC<PaylineProps> = ({ reels, rows, line }) => {
  const style = useMemo(() => {
    const size = themeVars.size[4];
    return {
      width: `calc(${reels} * ${size})`,
      height: `calc(${rows} * ${size})`,
    };
  }, [reels, rows]);
  const viewBox = useMemo(
    () => `0 0 ${calcSize(reels)} ${calcSize(rows)}`,
    [reels, rows]
  );
  const rects = useMemo(
    () => buildRects(reels, rows, line),
    [line, reels, rows]
  );

  return (
    <div style={style}>
      <svg viewBox={viewBox}>
        {rects.map(rect => (
          <rect
            key={`${rect.x}${rect.y}`}
            x={rect.x}
            y={rect.y}
            width={rectSize}
            height={rectSize}
            strokeWidth={1}
            stroke={themeVars.palette.black600}
            fill={
              rect.isFill ? themeVars.palette.yellow : themeVars.palette.white
            }
          />
        ))}
      </svg>
    </div>
  );
};

export default Payline;
