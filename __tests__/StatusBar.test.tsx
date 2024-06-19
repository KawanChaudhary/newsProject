// ThemeContext.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import CustomizeStatusBar from '../src/Components/General/CustomizeStatusbar';
import { ThemeProvider } from '../src/Contexts/ThemeContext'; 
import { defaultTheme } from '../src/Constants/Theme/theme';

describe('<CustomizeStatusBar />', () => {
  it('renders correctly with default theme', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <CustomizeStatusBar />
      </ThemeProvider>,
    );
    const statusBarContainer = getByTestId('status-bar');
    const statusBar = statusBarContainer.children[0] as unknown as React.ReactElement<any, any>;;

    expect(statusBar.props.barStyle).toEqual('light-content');
    expect(statusBar.props.backgroundColor).toEqual(defaultTheme.primary);
  });
});
