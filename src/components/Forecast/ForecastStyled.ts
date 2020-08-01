import styled from 'styled-components/macro'

interface StyleProps {
  index: number
}

export const ForecastStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 2rem;
  opacity: ${(props: StyleProps) => (props.index < 4 ? 1 - props.index * 0.2 : 0.5 - props.index * 0.03)};
  &:not(:last-of-type) {
    margin-bottom: 3rem;
    border-bottom: 1px solid #c1c1c1;
  }
  .city-name {
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
    color: #000000;
    flex: 1;
  }
`
export const ForecastCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 5rem;
  }
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
