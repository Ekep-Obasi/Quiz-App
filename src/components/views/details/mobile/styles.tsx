import styled from "@emotion/styled";

const StyledDetails = styled.main`
  min-height: 100vh;
  background: ${(props: any) => props.theme.linearGradient};

  header {
    display: flex;
    flex-direction: column;
    gap: 84px;

    nav {
      display: flex;
      justify-content: space-between;
      padding: 45px 30px 16px 30px;

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

    .info {
      display: flex;
      justify-content: space-between;
      padding: 24px;

      .quiz-details {
        display: flex;
        flex-direction: column;
        .name {
          color: #fff;
          font-family: Ubuntu;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .score {
          color: #fff;
          font-family: Nunito;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }

      .rating {
        display: flex;
        align-items: center;
        font-size: 1rem;

        p {
          font-family: Nunito;
          font-style: normal;
          font-weight: 600;
          color: #fff;
          padding: 0.5rem;
        }

        .star {
          font-size: 1.25rem;
          gap: 5px;
          color: ${(props: any) => props.theme.colors.yellow};
          margin: 0;
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
    height: 66.5vh;
    border-radius: 32px 32px 0 0;
    padding: 1rem 24px;
    gap: 25px;
  }
`;

const StyledQuestionDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .description {
    h2 {
      color: var(--black, #333);
      font-family: Nunito;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .instruction {
    h2 {
      color: var(--black, #333);
      font-family: Nunito;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

const StyledDescription = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  padding: 0.5rem 1rem;

  .desc {
    display: flex;
    flex-direction: column;

    .title {
      color: var(--black, #333);
      font-family: Ubuntu;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .more {
      color: #999;
      font-family: Nunito;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const StyledInstruction = styled.ul`
  padding: 0.5rem 1rem;

  li {
    color: var(--black, #333);
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export { StyledQuestionDetail, StyledDescription, StyledInstruction };
export default StyledDetails;
