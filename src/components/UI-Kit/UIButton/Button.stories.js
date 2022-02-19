import { Button } from "./Button";

export default {
  title: "Components/Input/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Button {...args} />;

export const purpleButton = Template.bind({});
purpleButton.storyName = "Button";
purpleButton.args = {
  children: "Button",
  size: "md",
  variant: "standart",
  textColor: "#d4d4d4",
  backgroundColor: "purple",
};
