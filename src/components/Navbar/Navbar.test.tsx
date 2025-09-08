import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';

void React;

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('../../i18n', () => ({
  __esModule: true,
  default: { changeLanguage: jest.fn() }
}));

describe('Navbar language selector', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it.each([
    ['🇪🇸'],
    ['🇩🇪']
  ])('updates language flag when %s is selected', async flag => {
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
    const option = screen.getByRole('button', { name: flag });
    await user.click(option);

    expect(toggle).toHaveTextContent(flag);
  });

  it('toggles menu visibility with navbar toggler and closes after link click', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </ThemeProvider>
    );

    const toggler = screen.getByLabelText(/toggle navigation/i);
    const menu = document.getElementById('navbarNav');

    expect(menu).toHaveClass('collapse');

    await user.click(toggler);
    expect(menu).toHaveClass('show');

    const firstLink = screen.getByRole('link', { name: 'nav.projects' });
    await user.click(firstLink);

    expect(menu).toHaveClass('collapse');
  });
});
