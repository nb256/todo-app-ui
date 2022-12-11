import styled from "@emotion/styled";

const StyledSubtitle = styled.div`
  margin: 6px 30px 43px 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--cool-grey-two);
`;

interface SubtitleProps {
  content: string;
}

export default function Subtitle({ content }: SubtitleProps) {
  return <StyledSubtitle>{content || ""}</StyledSubtitle>;
}
