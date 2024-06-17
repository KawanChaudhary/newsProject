import * as React from 'react';
import RootNavigator from './src/Navigators/Root';
import { ThemeProvider } from './src/Contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
