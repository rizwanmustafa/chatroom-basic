import { render, screen, fireEvent } from '@testing-library/react';
import SocketMessageSender from './SocketMessageSender';

const MessageTextBoxMatcher = /Message/i;
const SendButtonMatcher = /Send/i;

describe('SocketMessageSender Component', () => {
  it('renders the component', () => {
    render(<SocketMessageSender />);

    expect(screen.getByLabelText(MessageTextBoxMatcher)).toBeInTheDocument();
    expect(screen.getByText(SendButtonMatcher)).toBeInTheDocument();
  });

  it('updates the input field on change', () => {
    render(<SocketMessageSender />);

    const input = screen.getByLabelText(MessageTextBoxMatcher) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');
  });


  it('clears the input field after sending a message', () => {
    render(<SocketMessageSender />);

    const input = screen.getByLabelText(MessageTextBoxMatcher) as HTMLInputElement;
    const button = screen.getByText(SendButtonMatcher);

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
  });

  it('focuses the input field after sending a message', () => {
    render(<SocketMessageSender />);

    const input = screen.getByLabelText(MessageTextBoxMatcher) as HTMLInputElement;
    const button = screen.getByText(SendButtonMatcher);

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);

    expect(document.activeElement).toBe(input);
  });

  it('disables the send button when input is empty', () => {
    render(<SocketMessageSender />);

    const button = screen.getByText(SendButtonMatcher);
    const input = screen.getByLabelText(MessageTextBoxMatcher) as HTMLInputElement;

    expect(button).toBeDisabled(); // Button should be disabled initially

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(button).not.toBeDisabled(); // Button should be enabled when input is not empty
  });

});
