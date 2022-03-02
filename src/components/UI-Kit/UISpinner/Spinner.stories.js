import { Spinner } from "./Spinner";

export default {
  title: "Components/Layout/Spinner",
  component: Spinner,
  argTypes: {
    primaryBorderColor: { control: "color" },
    secondaryBorderColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Spinner {...args} />;

export const loadingSpinner = Template.bind({});
loadingSpinner.storyName = "Spinner";
loadingSpinner.args = {
  primaryBorderColor: "#f3f3f3",
  secondaryBorderColor: "#c3b1e1",
};
