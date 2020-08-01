import styled from 'styled-components/macro'

export const SuggestStyled = styled.div`
  width: 100%;
  .search {
    display: flex;
    .search-input {
      height: 3rem;
      border: none;
      border-top-left-radius: 30px;
      flex: 1;
      border-bottom-left-radius: 30px;
      padding-left: 20px;
      font-size: 1.6rem;
      font-weight: 400;
      font-family: 'Open Sans', sans-serif;
      color: #7d7d7d;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: lightgray;
      }
    }
    .search-button {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border: none;
      background: #f5ce00;
      padding: 0 2rem;
      color: #4c4b4b;
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  .suggest-box {
    padding: 1rem;
    position: absolute;
    width: calc(100% - 30rem);
  }
  .city-option {
    list-style: none;
    color: #9f9f9f;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
