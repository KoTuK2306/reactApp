import { ButtonGroup } from "./index";

export default {
  title: "Components/Input/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Group = Template.bind({});
Group.storyName = "ButtonGroup";
Group.args = {
  items: ["One", "Two", "Three"],
  backgroundColor: "purple",
  size: "md",
  textColor: "#d4d4d4",
  variant: "standart",
};
