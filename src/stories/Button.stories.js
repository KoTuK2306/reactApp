import { UIButton } from "../components/UI-Kit/UIButton";

export default {
  title: "Button",
  component: UIButton,
};

export const Standart = () => <UIButton text="Standart" variant="standart" />;
export const Text = () => <UIButton text="Text" variant="text" />;
export const Bordered = () => <UIButton text="Bordered" variant="bordered" />;
