import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getTheme } from 'commons/theme';
import { Theme } from 'commons/types';
import { DemoNavigator, DEMO_NAVIGATOR_PATH } from 'features/Demo';

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
      <Router>
        <Switch>
          <Container>
            <Route path={DEMO_NAVIGATOR_PATH} component={DemoNavigator} />
          </Container>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

// @ts-ignore
App.whyDidYouRender = true;

export default React.memo(App);
