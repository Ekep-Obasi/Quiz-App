import styled from "@emotion/styled";

const StyledHome = styled.main`
  min-height: 100vh;
  background: ${(props: any) => props.theme.linearGradient};

  header {
    padding: 45px 30px 16px 30px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .username {
      color: #fff;
      font-family: DM Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    h2 {
      color: #fff;
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.45);
      font-family: Ubuntu;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props: any) => props.theme.colors.white};
    width: 100%;
    border-radius: 32px 32px 0 0;
    padding: 1.02rem 24px;
    gap: 20px;

    .start-quiz {
      width: 100%;
      min-width: 327px;
      height: 50px;
      border-radius: 5px;
      background: var(--1, linear-gradient(135deg, #3550dc 0%, #27e9f7 100%));
      color: var(--white, #fff);
      font-family: Ubuntu;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`;

export default StyledHome;
