import type { Meta, StoryObj } from '@storybook/react-vite';
import { CursorGlow } from '../CursorGlow';

const meta = {
  title: 'Components/CursorGlow',
  component: CursorGlow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CursorGlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '50vh', position: 'relative' }}>
      <CursorGlow />
      <div style={{ padding: '2rem', color: 'var(--text)' }}>
        Move your cursor in this area to preview the glow effect.
      </div>
    </div>
  ),
};
