import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  FutureCard as StyledFutureCard,
  TodayCard as StyledTodayCard,
} from "../pages/root/Root.styled";
import { WeatherCard } from "./WeatherCard";

export default {
  title: "Design System / WeatherCard",
  component: WeatherCard,
} as ComponentMeta<typeof WeatherCard>;

const TodayCardTemplate: ComponentStory<typeof WeatherCard> = ({
  day,
  temperature,
  weather,
}) => (
  <StyledTodayCard>
    <WeatherCard day={day} temperature={temperature} weather={weather} />
  </StyledTodayCard>
);

export const TodayCard = TodayCardTemplate.bind({});

TodayCard.args = {
  day: "Today",
  temperature: 5,
  weather: "Sunny",
};

const FutureCardTemplate: ComponentStory<typeof WeatherCard> = ({
  day,
  temperature,
  weather,
}) => (
  <StyledFutureCard>
    <WeatherCard day={day} temperature={temperature} weather={weather} />
  </StyledFutureCard>
);

export const FutureCard = FutureCardTemplate.bind({});

FutureCard.args = {
  day: "Mon",
  temperature: 5,
};
