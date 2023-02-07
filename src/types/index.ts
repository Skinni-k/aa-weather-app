export type getWeatherResponseType = {
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
  future: {
    date: string;
    day: {
      avgtemp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }[];
};
