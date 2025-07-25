import { expect, userEvent, within } from 'storybook/test';
import App from './App';


export default {
  title: 'Project/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Views = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /Відправити/i });
    await expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);
    await expect(submitButton).toBeInTheDocument();
  },
};
