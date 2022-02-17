import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type BuyFeatureButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const BuyFeatureButton: React.FC<BuyFeatureButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="buyFeature"
    color="yellow"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default BuyFeatureButton;
