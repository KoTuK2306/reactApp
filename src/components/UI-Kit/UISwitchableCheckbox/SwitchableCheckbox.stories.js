import { SwitchableCheckbox } from "./SwitchableCheckbox";

export default {
  title: "Components/Input/Switchable Checkbox",
  component: SwitchableCheckbox,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <SwitchableCheckbox {...args} />;

export const Group = Template.bind({});
Group.storyName = "Switchable Checkbox";
Group.args = {};
