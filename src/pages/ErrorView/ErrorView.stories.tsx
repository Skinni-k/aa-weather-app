import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ErrorView } from "./ErrorView";

export default {
  title: "Design System / ErrorView",
  component: ErrorView,
} as ComponentMeta<typeof ErrorView>;

const Default: ComponentStory<typeof ErrorView> = () => <ErrorView />;

export const TodayCard = Default.bind({});
