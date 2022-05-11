import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/theme/theme';
import Provider from './src/context/Context';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <Provider>
      {
          element
      }
    </Provider>
  </ThemeProvider>
)