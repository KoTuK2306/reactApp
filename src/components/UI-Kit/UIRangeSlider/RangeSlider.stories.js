import { RangeSlider } from "./RangeSlider";

export default {
  title: "Components/Input/Slider",
  component: RangeSlider,
  argTypes: {
    firstSliderColor: { control: "color" },
    secondSliderColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <RangeSlider {...args} />;

export const purpleSlider = Template.bind({});
purpleSlider.storyName = "Slider";
purpleSlider.args = {
  firstSliderColor: "#c3b1e1",
  secondSliderColor: "#d6d6d6",
  size: "md",
};
