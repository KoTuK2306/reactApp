import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Purple = Template.bind({});
Purple.args = {
  backgroundColor: "#c300ff",
  children: "Button",
  size: "md",
  variant: "standart",
  textColor: "#d4d4d4",
};
