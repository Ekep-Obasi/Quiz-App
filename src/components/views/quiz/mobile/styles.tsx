import styled from "@emotion/styled";

const StyledQuiz = styled.main`
  min-height: 100vh;
  background: ${(props: any) => props.theme.linearGradient};

  header {
    padding: 45px 30px 16px 30px;
    display: flex;
    flex-direction: column;

    nav {
      display: flex;
      justify-content: space-between;

      .title {
        display: flex;
        gap: 1rem;

        span {
          color: #fff;
          font-family: Ubuntu;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .icon {
          width: 24px;
          height: 24px;
          color: #fff;
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props: any) => props.theme.colors.white};
    width: 100%;
    height: 88.53vh;
    border-radius: 32px 32px 0 0;
    padding: 1rem 24px;
    gap: 25px;

    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 85px;

      .backward {
        width: 50px;
        height: 50px;
        flex-shrink: 0;
        color: #d4d4d4;
      }

      .answer {
        min-width: 195px;
        height: 50px;
        flex-shrink: 0;
        border: 1px solid #3550dc;
        border-radius: 5px;
        background: var(--white, #fff);
        background: var(--1, linear-gradient(135deg, #3550dc 0%, #27e9f7 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .forward {
        width: 50px;
        height: 50px;
        flex-shrink: 0;
        color: #d4d4d4;
      }
    }
  }
`;

export default StyledQuiz;
