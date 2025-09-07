import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('../../i18n', () => ({
  __esModule: true,
  default: { changeLanguage: jest.fn() }
}));

describe('Navbar language selector', () => {
  it('updates language flag when a new language is selected', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </ThemeProvider>
    );

    const toggle = screen.getByTestId('lang-toggle');
    expect(toggle).toHaveTextContent('🇺🇸');

    await user.click(toggle);
    const spanish = screen.getByRole('button', { name: '🇪🇸' });
    await user.click(spanish);

    expect(toggle).toHaveTextContent('🇪🇸');
  });
});
