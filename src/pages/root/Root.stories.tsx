import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Root } from "./Root";

export default {
  title: "Design System / Root",
  component: Root,
} as ComponentMeta<typeof Root>;

const Default: ComponentStory<typeof Root> = () => <Root />;

export const TodayCard = Default.bind({});
