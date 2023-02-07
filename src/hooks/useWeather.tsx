import { useQuery } from "react-query";
import { apiURL } from "../constants";
import { getWeatherResponseType } from "../types";

const getWeather = async (
  place: string,
  days: string
): Promise<getWeatherResponseType> => {
  const response = await fetch(
    `${apiURL}&q=${place}&days=${days}&aqi=no&alerts=no`
  );
  const data = await response.json();
  data.forecast.forecastday.shift();
  return {
    current: data.current,
    future: data.forecast.forecastday,
  };
};

export const useWeather = (place: string, days = "5") => {
  return useQuery(["temperature", place, days], () => getWeather(place, days));
};
