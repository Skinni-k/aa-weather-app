import styled from "styled-components";

export const StyledWeatherCard = styled.div`
  background-color: #eef6fb;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .temperature {
    font-weight: 500;
    transform: scale(1, 1.5);
  }
`;
