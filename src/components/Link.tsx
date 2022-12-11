import { Link } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled.div`
  font-size: 14px;
`;

interface LinkProps {
  href?: string;
  content: string;
  onClick?: () => void;
}

export default function LinkComponent({
  href,
  content,
  onClick = () => {},
}: LinkProps) {
  return (
    <Container>
      <Link href={href} underline="hover" onClick={onClick}>
        {content}
      </Link>
    </Container>
  );
}
