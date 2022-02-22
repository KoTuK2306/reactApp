import { SwitchableCheckbox } from "./SwitchableCheckbox";

export default {
  title: "Components/Input/Switchable Checkbox",
  component: SwitchableCheckbox,
  argTypes: {
    textColor: { control: "color" },
    checkedCheckbox: { control: "color" },
    uncheckedCheckbox: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <SwitchableCheckbox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.storyName = "Switchable Checkbox";
Checkbox.args = {
  text: "Lable text",
  textColor: "#aaa",
  checkedCheckbox: "#7309AA",
  uncheckedCheckbox: "#7E7E7E",
  checkboxBackground: "#ddd",
  size: "md",
};
