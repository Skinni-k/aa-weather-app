import { useState } from "react";
import { WeatherCard } from "../../components/WeatherCard";

import { Container, FutureCard, Paper, TodayCard } from "./Root.styled";
import { Tabs } from "../../components/Tabs";
import { useWeather } from "../../hooks/useWeather";
import { useLocation } from "react-router-dom";

const cities = ["OTTAWA", "MOSCOW", "TOKYO"];
const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function Root() {
  const [value, setValue] = useState(cities[0]);
  const { isLoading, isError, data } = useWeather(value);
  const location = useLocation();
  console.log(location.pathname);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Paper>
        <Tabs selectedValue={value} cities={cities} OnClick={handleChange} />
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error</span>}
        {data && !isLoading && !isError && (
          <>
            <TodayCard>
              <WeatherCard
                day={"Today"}
                temperature={data.current.temp_c}
                weather={data.current.condition.text}
              />
            </TodayCard>
            <FutureCard>
              {data.future.map((futureData) => {
                const day = new Date(futureData.date).getDay();
                const dayName = weekday[day];
                return (
                  <WeatherCard
                    key={day}
                    day={dayName}
                    weather={futureData.day.condition.text}
                    temperature={futureData.day.avgtemp_c}
                  />
                );
              })}
            </FutureCard>
          </>
        )}
      </Paper>
    </Container>
  );
}
