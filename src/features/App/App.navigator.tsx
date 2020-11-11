import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { getTheme } from 'commons/theme';
import { Icon } from 'commons/fragments';
import { Theme } from 'commons/types';

import { useAppStore } from './app.store';

const Container = styled.div<Theme>`
  background: ${(p) => p.theme.colors.background};
  transition: background 0.25s var(--ease-in-out-quad),
    color 0.25s var(--ease-in-out-quad);
  display: flex;
  flex: 1;
`;

const App: React.FC = () => {
  const [darkTheme] = useAppStore('darkTheme');

  return (
    <ThemeProvider theme={getTheme({ isDark: darkTheme })}>
      <Container>
        <Icon name={'add'} />
        <Icon name={'check'} />
        <Icon name={'close'} />
        <Icon name={'down-arrow'} />
        <Icon name={'pen'} />
        <Icon name={'play'} />
        <Icon name={'rewind'} />
        <Icon name={'step'} />
      </Container>
    </ThemeProvider>
  );
};

// @ts-ignore
App.whyDidYouRender = true;

export default React.memo(App);
