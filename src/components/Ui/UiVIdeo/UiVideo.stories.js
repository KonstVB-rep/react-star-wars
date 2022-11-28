import UiVideo from './UiVideo';
import video from './video/Obi.mp4';

export default  {
  title: 'Ui-Kit/UiVideo',
  component: UiVideo
}

const Template = (args) => <UiVideo {...args} />

const props = {
  src: video,
  classes: 0.7,
  playbackRate: ''
}

export const Default = Template.bind({});
Default.args = {
  ...props,
}