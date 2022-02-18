import { Stack } from "./index";
import styled from "styled-components";

export default {
  title: "Components/Layout/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: { summary: "number" }, defaultValue: 4, description: "Number of children in your stack" },
  },
};

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren)].map(() => (
      <StyledDiv />
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.storyName = "Stack";
Horizontal.args = {
  direction: "row",
  spacing: 2,
  isWrap: false,
};
