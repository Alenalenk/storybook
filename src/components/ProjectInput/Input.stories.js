import { fn } from 'storybook/test';
import { ProjectInput } from './ProjectInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Project/Input',
  component: ProjectInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button = {
  args: {
    id:"email1", 
        label:"Електронна адреса", 
        type:"email",
        name:"email",
        value: 'example@gmail.com',
        required: true, 
        placeholder:"email@example.com",
  },
};