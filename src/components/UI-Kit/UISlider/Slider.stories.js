import { Slider } from "./Slider";

export default {
  title: "Components/Input/Slider",
  component: Slider,
  argTypes: {
    backgroundColor: { control: "color" },
    primarySliderColor: { control: "color" },
    secondarySliderColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Slider {...args} />;

export const purpleSlider = Template.bind({});
purpleSlider.storyName = "Slider";
purpleSlider.args = {
  backgroundColor: "#d3d3d3",
  primarySliderColor: "#c3b1e1",
  secondarySliderColor: "#d6d6d6",
};
