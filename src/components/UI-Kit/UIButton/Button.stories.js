import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  children: "Button",
  size: "md",
};

export const Purple = Template.bind({});
Purple.args = {
  backgroundColor: "purple",
  children: "Button",
  size: "md",
};
