import styled from "@emotion/styled";

const StyledIcon = styled.div<themeTypes>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black, #333);

  .icon {
    color: ${(props) => props.theme.colors.white};
    width: 24px;
    height: 24px;
  }
`;

export default function Icon({ icon }: { icon: JSX.Element }) {
  return <StyledIcon>{icon}</StyledIcon>;
}
