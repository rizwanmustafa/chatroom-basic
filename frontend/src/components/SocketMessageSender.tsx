import React, { useState , useRef, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useResponsiveValue from './useResponsiveScreen';

export const SocketMessageSender = () => {
  const screenSize: string = useResponsiveValue();
  const [message, setMessage] = useState("");
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus input on mount
    }
  }, []);

  function onSendButtonClick(e: React.MouseEvent | React.KeyboardEvent) {
    e.preventDefault();
    console.log("Send button clicked");
    console.log("Message: ", message);
    // Reset the message
    setMessage("");

    if(inputRef.current){
      inputRef.current.focus(); // Focus input after sending message
    }
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      onSendButtonClick(e);
    }
  }

  return (
    <Stack
      spacing={2}
      direction={screenSize == "small" ? "column" : "row"}
      style={{ width: "100%" }}
      alignItems={"stretch"}
    >

      <TextField
        variant='standard'
        id="outlined-search"
        label="Message"
        fullWidth
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        inputRef={inputRef} // Attach ref to TextField
      />

      <Button
        variant='contained'
        style={{ padding: "0 30px", minHeight: 30 }}
        onClick={onSendButtonClick}
        disabled={message.trim() === ""} // Disable button if message is empty
      >
        Send
      </Button>

    </Stack>
  );
};

export default SocketMessageSender;