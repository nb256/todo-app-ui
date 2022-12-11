import styled from "@emotion/styled";

const StyledTitle = styled.div`
  margin-top: 25px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark-blue-grey);
`;

interface TitleProps {
  content: string;
}

export default function Title({ content }: TitleProps) {
  return <StyledTitle>{content || ""}</StyledTitle>;
}
