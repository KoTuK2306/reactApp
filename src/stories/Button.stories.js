import { Button } from "../components/UI-Kit/index";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Button",
  size: "md",
};

export const Purple = Template.bind({});
Purple.args = {
  backgroundColor: "purple",
  label: "Button",
  size: "md",
};
