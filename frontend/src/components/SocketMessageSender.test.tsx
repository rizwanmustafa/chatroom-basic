import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SocketMessageSender from './SocketMessageSender';

describe('SocketMessageSender Component', () => {
  it('renders the component', () => {
    render(<SocketMessageSender />);

    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Send/i)).toBeInTheDocument();
  });

  it('updates the input field on change', () => {
    render(<SocketMessageSender />);

    const input = screen.getByLabelText(/Message/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');
  });


  it('clears the input field after sending a message', () => {
    render(<SocketMessageSender />);

    const input = screen.getByLabelText(/Message/i) as HTMLInputElement;
    const button = screen.getByText(/Send/i);

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
  });

  it('disables the send button when input is empty', () => {
    render(<SocketMessageSender />);

    const button = screen.getByText(/Send/i);
    const input = screen.getByLabelText(/Message/i) as HTMLInputElement;

    expect(button).toBeDisabled(); // Button should be disabled initially

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(button).not.toBeDisabled(); // Button should be enabled when input is not empty
  });

});
