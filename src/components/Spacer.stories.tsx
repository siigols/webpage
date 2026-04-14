import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spacer } from './Spacer';

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <div>
      <div style={{ background: 'var(--accent-bg, #e0e0e0)', padding: '8px' }}>Above</div>
      <Spacer {...args} />
      <div style={{ background: 'var(--accent-bg, #e0e0e0)', padding: '8px' }}>Below</div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: { size: 'md' },
  render: () => (
    <div>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <div style={{ background: 'var(--accent-bg, #e0e0e0)', padding: '8px' }}>
            size=&quot;{size}&quot;
          </div>
          <Spacer size={size} />
        </div>
      ))}
      <div style={{ background: 'var(--accent-bg, #e0e0e0)', padding: '8px' }}>End</div>
    </div>
  ),
};
