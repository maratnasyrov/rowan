import React, { useEffect, useState } from 'react';

import Info, { InfoProps } from '../Info';

export type WatchProps = Pick<InfoProps, 'className'>;

const getTime = () =>
  new Date().toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  });

const Watch: React.FC<WatchProps> = ({ className }) => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, []);

  return <Info title={time} className={className} />;
};

export default Watch;
