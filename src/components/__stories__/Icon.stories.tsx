import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'github-icon',
        'bluesky-icon',
        'discord-icon',
        'x-icon',
        'documentation-icon',
        'social-icon',
      ],
    },
    size: { control: { type: 'range', min: 12, max: 64, step: 4 } },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'github-icon',
  },
};

export const Large: Story = {
  args: {
    name: 'github-icon',
    size: 48,
  },
};

export const Small: Story = {
  args: {
    name: 'github-icon',
    size: 14,
  },
};

export const AllIcons: Story = {
  args: { name: 'github-icon' },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {[
        'github-icon',
        'bluesky-icon',
        'discord-icon',
        'x-icon',
        'documentation-icon',
        'social-icon',
      ].map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon name={name} size={24} />
          <span style={{ fontSize: '11px', color: 'var(--text)' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
