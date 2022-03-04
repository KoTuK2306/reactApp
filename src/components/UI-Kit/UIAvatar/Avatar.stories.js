import { Avatar } from "./Avatar";

export default {
  title: "Components/Data display/Avatar",
  component: Avatar,
  argTypes: {
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Avatar {...args} />;

export const textAvatar = Template.bind({});
textAvatar.args = {
  size: "md",
  children: "HG",
  variant: "rounded",
  backgroundColor: "#c3b1e1",
  textColor: "#f3f3f3",
};

export const imgAvatar = Template.bind({});
imgAvatar.args = {
  size: "md",
  variant: "rounded",
  src: "../../../avatars/avatar_1.png",
};
