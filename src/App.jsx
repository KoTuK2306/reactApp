import { UIButton } from "./components/UI-Kit/UIButton";

export const App = () => {
  return (
    <div>
      <UIButton text="Standart" variant="standart" />
      <UIButton text="Text" variant="text" />
      <UIButton text="Bordered" variant="bordered" />
    </div>
  );
};
