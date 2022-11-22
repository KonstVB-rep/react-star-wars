import UiButton from "./UiButton";

export default {
  title: "Ui-Kit/UiButton",
  component: "UiButton",
};

const Template = (args) => <UiButton {...args} />;

const props = {
  text: "Push",
  onClick: () => console.log("Click"),
  disabled: false,
  theme: "dark",
};
// Each story then reuses that template
export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: "dark",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: true,
};
