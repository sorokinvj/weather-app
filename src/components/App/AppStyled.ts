import styled from 'styled-components/macro'

interface StyledProps {
  back: string
}

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${(props: StyledProps) => `url(${props.back})`};
  background-size: cover;
  min-height: 100vh;
  padding: 0 10rem 10rem;

  .app-title {
    margin: 10rem 0 5rem;
    color: #ffeace;
    font-weight: 300;
    font-size: 2rem;
  }

  .thanks {
    margin: 10rem 0 0 0;
    color: #6b6b6b;
    font-weight: 300;
    font-size: 1rem;

    a {
      color: #6b6b6b;
      text-decoration: underline;
    }
  }

  .error-message {
    padding-left: 1rem;
    color: #ff4f0a;
    line-height: 1.5rem;
  }
`
