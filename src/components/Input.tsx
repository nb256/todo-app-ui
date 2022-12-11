import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 10px;
`;

interface InputProps {
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function InputComponent({
  placeholder,
  type = "text",
  onChange = () => {},
  onKeyDown = () => {},
  value,
}: InputProps) {
  return (
    <Container>
      <TextField
        label={placeholder}
        variant="standard"
        type={type}
        style={{ width: "100%" }}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
    </Container>
  );
}
