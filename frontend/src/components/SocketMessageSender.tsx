import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useResponsiveValue from './useResponsiveScreen';

export const SocketMessageSender = () => {
  const screenSize: string = useResponsiveValue();

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
        type="text"
        style={{ flex: 1 }}
      />

      <Button
        variant='contained'
        style={{ padding: "0 30px", minHeight: 30 }}
      >
        Send
      </Button>

    </Stack>
  );
};

export default SocketMessageSender;