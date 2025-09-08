import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('bootstrap', () => ({
  Toast: jest.fn().mockImplementation(() => ({ show: jest.fn() }))
}));

jest.mock('../../i18n', () => ({
  __esModule: true,
  default: { changeLanguage: jest.fn() }
}));

const renderForm = () =>
  render(
    <ThemeProvider>
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>
    </ThemeProvider>
  );

test('shows error when message is shorter than 25 characters', async () => {
  const user = userEvent.setup();
  renderForm();

  await user.type(screen.getByLabelText('contact.name'), 'John');
  await user.type(screen.getByLabelText('contact.email'), 'john@example.com');
  await user.type(screen.getByLabelText('contact.message'), 'too short');
  await user.click(screen.getByRole('button', { name: 'contact.submit' }));

  expect(screen.getByText('contact.errors.messageLength')).toBeInTheDocument();
});

test('displays spinner during form submission', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  renderForm();

  await user.type(screen.getByLabelText('contact.name'), 'John');
  await user.type(screen.getByLabelText('contact.email'), 'john@example.com');
  await user.type(
    screen.getByLabelText('contact.message'),
    'This is a sufficiently long message with more than twenty five characters.'
  );

  const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.6);
  await user.click(screen.getByRole('button', { name: 'contact.submit' }));

  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  await act(async () => {
    jest.runAllTimers();
  });
  expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  randomSpy.mockRestore();
  jest.useRealTimers();
});
