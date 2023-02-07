import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { Tabs } from "./Tabs";

export default {
  title: "Design System / Tabs",
  component: Tabs,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = ({ cities, selectedValue }) => {
  const [value, setValue] = useState(selectedValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs cities={cities} selectedValue={value} OnClick={handleChange} />
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { include: ["cities", "selectedValue"] },
};

Default.args = {
  cities: ["OTTAWA", "MOSCOW", "TOKYO"],
  selectedValue: "OTTAWA",
};
