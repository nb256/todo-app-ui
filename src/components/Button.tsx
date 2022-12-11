import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export default function ButtonComponent({ onClick, label }: ButtonProps) {
  return (
    <Container>
      <Button onClick={onClick} variant="contained" fullWidth>
        {label}
      </Button>
    </Container>
  );
}
