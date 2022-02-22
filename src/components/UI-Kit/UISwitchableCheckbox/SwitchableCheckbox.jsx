import { StyledLabel, StyledCheckbox } from "./SwitchableCheckbox.style";

export const SwitchableCheckbox = () => {
  return (
    <>
      <StyledCheckbox type="checkbox" id="check"></StyledCheckbox>
      <StyledLabel for="check" id="check">
        Text for checkbox
      </StyledLabel>
    </>
  );
};
