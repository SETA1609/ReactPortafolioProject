import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';

jest.mock('bootstrap', () => ({
  Toast: jest.fn().mockImplementation(() => ({ show: jest.fn() }))
}));


const renderForm = () =>
  render(
    <ThemeProvider>
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>
    </ThemeProvider>
  );

test('shows required message for Name on blur', async () => {
  const user = userEvent.setup();
  renderForm();
  const nameInput = screen.getByLabelText('Name');
  await user.click(nameInput);
  await user.tab();
  expect(nameInput).toHaveClass('is-invalid');
  expect(screen.getByText('Required')).toBeInTheDocument();
});

test('shows required message for Email on blur when empty', async () => {
  const user = userEvent.setup();
  renderForm();
  const emailInput = screen.getByLabelText('Email');
  await user.click(emailInput);
  await user.tab();
  expect(emailInput).toHaveClass('is-invalid');
  expect(screen.getByText('Required')).toBeInTheDocument();
});

test('shows invalid email message for malformed Email input', async () => {
  const user = userEvent.setup();
  renderForm();
  const emailInput = screen.getByLabelText('Email');
  await user.type(emailInput, 'invalid');
  await user.tab();
  expect(emailInput).toHaveClass('is-invalid');
  expect(screen.getByText('Invalid email address')).toBeInTheDocument();
});

test('shows required message for message textarea on blur', async () => {
  const user = userEvent.setup();
  renderForm();
  const messageInput = screen.getByLabelText('Your message');
  await user.click(messageInput);
  await user.tab();
  expect(messageInput).toHaveClass('is-invalid');
  expect(screen.getByText('Required')).toBeInTheDocument();
});

test('shows length error for short message', async () => {
  const user = userEvent.setup();
  renderForm();
  const messageInput = screen.getByLabelText('Your message');
  await user.type(messageInput, 'short message');
  await user.tab();
  expect(messageInput).toHaveClass('is-invalid');
  expect(screen.getByText('Must be at least 25 characters')).toBeInTheDocument();
});

test('submit without values shows required messages for all fields', async () => {
  const user = userEvent.setup();
  renderForm();
  await user.click(screen.getByRole('button', { name: 'Submit' }));
  const requiredMessages = screen.getAllByText('Required');
  expect(requiredMessages).toHaveLength(3);
  expect(screen.getByLabelText('Name')).toHaveClass('is-invalid');
  expect(screen.getByLabelText('Email')).toHaveClass('is-invalid');
  expect(screen.getByLabelText('Your message')).toHaveClass('is-invalid');
});

test('displays spinner during form submission', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  renderForm();

  await user.type(screen.getByLabelText('Name'), 'John');
  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.type(
    screen.getByLabelText('Your message'),
    'This is a sufficiently long message with more than twenty five characters.'
  );

  const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.6);
  await user.click(screen.getByRole('button', { name: 'Submit' }));

  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  await act(async () => {
    jest.runAllTimers();
  });
  expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  randomSpy.mockRestore();
  jest.useRealTimers();
});

