import React from 'react';

import { useStyles } from '../../hooks';
import { mainThemeSprinkles } from '../../themes';
import Container from '../Container';
import Text from '../Text';

export type InfoProps = {
  title: string;
  value?: string;
  className?: string;
};

const Info: React.FC<InfoProps> = ({ title, value, className }) => {
  const rootClassName = useStyles(
    mainThemeSprinkles({
      backgroundColor: 'black300',
      borderRadius: 'xs',
      backdropFilter: 'normal',
      zIndex: 'info',
    }),
    className
  );

  return (
    <Container className={rootClassName} paddingX="xs" paddingY="xxs" gap="xxs">
      <Text variant="info">{title}</Text>
      {value && (
        <Text variant="info" color="yellow">
          {value}
        </Text>
      )}
    </Container>
  );
};

export default Info;
