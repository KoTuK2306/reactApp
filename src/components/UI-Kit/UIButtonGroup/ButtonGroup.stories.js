import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Components/Input/Button Group",
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
Group.storyName = "Button Group";
Group.args = {
  items: ["One", "Two", "Three"],
  backgroundColor: "purple",
  size: "md",
  textColor: "#d4d4d4",
  variant: "standart",
};
