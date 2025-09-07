import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

React;

jest.mock('./components/Projects/Projects', () => ({
  __esModule: true,
  default: function MockProjects() {
    return <div />;
  }
}));

test('renders App component', () => {
  render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
});
