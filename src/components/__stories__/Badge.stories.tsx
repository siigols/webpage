import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'TypeScript',
    variant: 'default',
  },
};

export const Accent: Story = {
  args: {
    children: 'React',
    variant: 'accent',
  },
};

export const Outline: Story = {
  args: {
    children: 'Open Source',
    variant: 'outline',
  },
};

export const AllVariants: Story = {
  args: { children: 'Badge', variant: 'default' },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="default">TypeScript</Badge>
      <Badge variant="accent">React</Badge>
      <Badge variant="outline">Vite</Badge>
    </div>
  ),
};

export const TechStack: Story = {
  args: { children: 'React', variant: 'accent' },
  render: () => (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      {['React', 'TypeScript', 'Tailwind', 'Vite', 'Node.js', 'PostgreSQL'].map(
        (tech) => (
          <Badge key={tech} variant="accent">
            {tech}
          </Badge>
        ),
      )}
    </div>
  ),
};
