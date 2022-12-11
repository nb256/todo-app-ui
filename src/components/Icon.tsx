import React from "react";
import styled from "@emotion/styled";

const StyledIcon = styled.img`
  width: 40px;
  height: 32px;
`;

interface IconProps {
  src: string;
  alt?: string;
}

export default function Icon({ src, alt = "icon" }: IconProps) {
  return <StyledIcon src={src} alt={alt}></StyledIcon>;
}
