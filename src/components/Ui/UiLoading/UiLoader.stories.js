import UiLoader from "./UiLoader";

export default {
  title: "Ui-Kit/UiLoading",
  component: "UiLoading",
};

const Template = (args) => <UiLoader {...args} />;

const props = {
  text: "Preloader",
  classes: "",
  isShadow: false,
  theme: "black",
};
//👇 Each story then reuses that template
export const Black = Template.bind({});

Black.args = {
  ...props,
  theme: "black",
};

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "white",
  isShadow: true,
};

export const Blue = Template.bind({});

Blue.args = {
  ...props,
  theme: "blue",
};
