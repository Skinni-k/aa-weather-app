import { StyledTabs } from "./Tabs.styled";

interface Props {
  cities: string[];
  selectedValue: string;
  OnClick: (arg1: string) => void;
}

export function Tabs({ cities, selectedValue, OnClick }: Props) {
  return (
    <>
      <StyledTabs>
        {cities.map((city) => {
          const selectedStyle =
            city === selectedValue
              ? {
                  color: "#5FB0E8",
                  fontWeight: 700,
                }
              : {};
          return (
            <p
              key={city}
              style={{ ...selectedStyle }}
              onClick={() => OnClick(city)}
            >
              {city}
            </p>
          );
        })}
      </StyledTabs>
    </>
  );
}
