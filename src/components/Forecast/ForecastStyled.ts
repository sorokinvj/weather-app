import styled from 'styled-components/macro'

export const ForecastStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12rem;
  .city-name {
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
    color: #000000;
  }
`
export const ForecastCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .day,
  .date {
    font-style: normal;
    font-size: 13px;
    line-height: 16px;
    font-weight: bold;
    margin: 0;
  }
  .day {
    color: #ec6d4c;
  }
  .date {
    color: #9f9f9f;
  }
  .icon {
    width: 60px;
  }
  .temp {
    font-size: 20px;
    line-height: 27px;
    margin: 0;
    color: #3a3a3a;
  }
`
