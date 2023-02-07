import { StyledWeatherCard } from "./WeatherCard.styled";

import { Clouds } from "../assets/clouds";
import { Rain } from "../assets/rain";
import { Snow } from "../assets/snow";
import { Sunny } from "../assets/sunny";

interface Props {
  day: string;
  temperature: number;
  weather?: string;
}

interface IconMappingProps {
  weather?: string;
}

const IconMapping = ({ weather }: IconMappingProps) => {
  if (!weather) return <Clouds />;
  if (weather.includes("snow")) return <Snow />;
  if (weather.includes("sunny")) return <Sunny />;
  if (weather.includes("rain")) return <Rain />;
  if (weather.includes("clouds")) return <Clouds />;
  return <Clouds />;
};

export const WeatherCard = ({ day, temperature, weather }: Props) => {
  return (
    <StyledWeatherCard className="container" data-testid={day}>
      <p>{day}</p>
      <div className="detailsContainer">
        <IconMapping weather={weather} />
        <div className="content">
          <p className="temperature">{temperature}°</p>
          {day === "Today" && <p className="weather">{weather}</p>}
        </div>
      </div>
    </StyledWeatherCard>
  );
};
