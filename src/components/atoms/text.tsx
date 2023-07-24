import styled from "@emotion/styled";

interface TextProps {
  variance: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content?: string;
  theme?: any;
  sx?: any;
}

const StyledText = styled.span<TextProps>`
  font-family: ${(props) => props.theme.fontFamily[2]};
  color: ${(props) => props.theme.colors.linearGradient};
  display: block;

  ${(props): any => {
    switch (props.variance) {
      case "h1":
        return `
          font-size: 2rem;
          font-weight: bold;
        `;
      case "h2":
        return `
          font-size: 1.5rem;
          font-weight: bold;
        `;
      case "h3":
        return `
          font-size: 1.17rem;
          font-weight: bold;
        `;
      case "h4":
        return `
          font-weight: bold;
        `;
      case "h5":
        return `
          font-size: 0.83rem;
          font-weight: bold;
        `;
      case "h6":
        return `
          font-size: 0.67rem;
          font-weight: bold;
        `;
      case "p":
        return `
          color: aliceblue;
        `;
    }
  }}

  ${(props: TextProps): any => props.sx}
`;

export default function Text(props: TextProps) {
  return <StyledText {...props}>{props.content}</StyledText>;
}
