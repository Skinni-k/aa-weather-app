import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #eef6fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

const Card = css`
  height: 190px;
  width: 200px;
  flex-grow: 1;

  .container {
    border: white solid 3px;
    flex-grow: 1;
    justify-content: space-evenly;
  }

  .detailsContainer {
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    .weatherImg {
      height: 50px;
      width: 50px;
    }

    .content {
      margin: 16px;
    }

    @media (min-width: ${({ theme }) => theme.size.largeMobile}) {
      width: 150px;
    }
  }
`;

export const TodayCard = styled.div`
  ${Card}

  .container {
    border-radius: 8px 8px 0px 0px;
    justify-content: center;
  }

  .detailsContainer {
    justify-content: center;
  }

  @media (min-width: ${({ theme }) => theme.size.largeMobile}) {
    box-shadow: 0px 3px 10px 1px #c0b8b8;
    width: 100%;
  }
`;

export const FutureCard = styled.div`
  ${Card}

  & div:first-child {
    border-radius: 0px 0px 0px 8px;
  }
  & div:last-child {
    border-radius: 0px 0px 8px 0px;
    margin-right: 0px;
  }

  @media (min-width: ${({ theme }) => theme.size.largeMobile}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    box-shadow: 0px 7px 10px 1px #c0b8b8;
  }

  .detailsContainer {
    flex-direction: column;
    width: 100px;
  }
`;
