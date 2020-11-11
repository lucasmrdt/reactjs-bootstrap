import React from 'react';
import styled from '@emotion/styled';

import { Colors, Theme } from 'commons/types';

const I = styled.i<Theme & { color: Colors }>`
  color: ${(p) => p.theme.colors[p.color]};
`;

interface Props {
  name:
    | 'add'
    | 'close'
    | 'check'
    | 'down-arrow'
    | 'pen'
    | 'play'
    | 'rewind'
    | 'step';
  color?: Colors;
}

const Icon: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  name,
  color = 'primary',
  ...props
}) => <I className={`icon-${name}`} color={color} {...props}></I>;

export default Icon;
