import styled from 'styled-components'

export const DayInWeekStyle = styled.div`
  float: left;
  width: 12.5%;
  border-right: 1px solid #222;
  &:first-child {
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-right: none;
  }
  .day-in-week {
    padding: 16px 0 22px;
    color: #222;
    text-align: center;
    cursor: pointer;
    &.active {
      background-color: #ddd;
    }
    p {
      margin: 0;
    }
    .day {
      font-size: 16px;
      font-weight: bold;
    }
    .icon {
      display: inline-block;
      width: 50px;
      img {
        width: 100%;
      }
    }
    .temp-max {
      margin-bottom: 2px;
      span {
        position: relative;
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        &:after {
          position: absolute;
          content: '';
          width: 3px;
          height: 3px;
          top: 3px;
          right: -9px;
          border: 2px solid #000;
          border-radius: 50%;
        }
      }
    }
    .temp-min {
      span {
        position: relative;
        display: inline-block;
        font-size: 14px;
        &:after {
          position: absolute;
          content: '';
          width: 2px;
          height: 2px;
          top: 3px;
          right: -6px;
          border: 1px solid #000;
          border-radius: 50%;
        }
      }
    }
  }
`
