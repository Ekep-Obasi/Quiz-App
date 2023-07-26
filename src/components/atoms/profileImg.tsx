import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface profileImgProps extends themeTypes {
  image?: string;
}

const StyledProfileImg = styled.div<profileImgProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: block;
  z-index: 3;

  ${(props) =>
    !props.image
      ? css`
          background-color: ${props.theme.colors?.grey.medium};
        `
      : css`
          background-image: url(${props.image});
        `}
`;

export default function ProfileImg(props: profileImgProps) {
  return <StyledProfileImg {...props} />;
}
