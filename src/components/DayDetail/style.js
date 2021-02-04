import styled from 'styled-components'

export const DayDetailStyle = styled.div`
  padding: 8px 16px 0;
  border-bottom: 1px solid #222;
  .place {
    font-size: 24px;
    font-weight: bold;
  }
  .sub-title {
    color: #888;
    font-size: 18px;
    margin: 0;
  }
  .degree {
    float: left;
    margin-right: 60px;
    .icon {
      float:left;
      width: 100px;
      margin: 0;
      img {
        width: 100%;
      }
    }
    .number {
      position: relative;
      float: left;
      font-size: 56px;
      font-weight: bold;
      margin-top: 16px;
      &:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        top: 12px;
        right: -20px;
        border: 3px solid #000;
        border-radius: 50%;
      }
    }
    .unit {
      float: left;
      margin-left: 35px;
      margin-top: 26px;
      span {
        color: #888;
        cursor: pointer;
        margin: 0 2px;
        &.active {
          color: #000;
        }
      }
    }
  }
  .weather-detail {
    float: left;
    margin-top: 21px;
    p {
      color: #222;
    }
  }
`
