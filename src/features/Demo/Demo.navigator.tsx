import React from 'react';
import { Icon } from 'commons/fragments';

interface Props {}

const DemoNavigator: React.FC<Props> = () => {
  return (
    <>
      <Icon name={'add'} />
      <Icon name={'check'} />
      <Icon name={'close'} />
      <Icon name={'down-arrow'} />
      <Icon name={'pen'} />
      <Icon name={'play'} />
      <Icon name={'rewind'} />
      <Icon name={'step'} />
    </>
  );
};

// @ts-ignore
DemoNavigator.whyDidYouRender = true;

export default React.memo(DemoNavigator);
