import React from 'react';

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
}

const Icon: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  name,
  ...props
}) => <i {...props} className={`icon-${name}`}></i>;

export default Icon;
