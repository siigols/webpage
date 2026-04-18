import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { Badge } from '../Badge';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    hover: { control: 'boolean' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3
          style={{
            margin: '0 0 8px',
            color: 'var(--text-h)',
            fontWeight: 600,
          }}
        >
          Project Name
        </h3>
        <p style={{ margin: 0, color: 'var(--text)', fontSize: '14px' }}>
          A brief description of the project and what it does.
        </p>
      </div>
    ),
  },
};

export const WithLink: Story = {
  args: {
    href: 'https://github.com',
    children: (
      <div>
        <h3
          style={{
            margin: '0 0 8px',
            color: 'var(--text-h)',
            fontWeight: 600,
          }}
        >
          Clickable Card
        </h3>
        <p style={{ margin: 0, color: 'var(--text)', fontSize: '14px' }}>
          This entire card is a link. Hover to see the lift effect.
        </p>
      </div>
    ),
  },
};

export const NoHover: Story = {
  args: {
    hover: false,
    children: (
      <div>
        <h3
          style={{
            margin: '0 0 8px',
            color: 'var(--text-h)',
            fontWeight: 600,
          }}
        >
          Static Card
        </h3>
        <p style={{ margin: 0, color: 'var(--text)', fontSize: '14px' }}>
          This card has no hover effect.
        </p>
      </div>
    ),
  },
};

export const ProjectCard: Story = {
  args: { children: 'Project Card' },
  render: () => (
    <Card href="https://github.com">
      <div style={{ textAlign: 'left' }}>
        <h3
          style={{
            margin: '0 0 4px',
            color: 'var(--text-h)',
            fontWeight: 600,
          }}
        >
          Personal Portfolio
        </h3>
        <p
          style={{
            margin: '0 0 12px',
            color: 'var(--text)',
            fontSize: '14px',
          }}
        >
          A modern portfolio website built with React, TypeScript, and
          Tailwind CSS. Features dark mode, responsive design, and a component
          library documented in Storybook.
        </p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <Badge variant="accent">React</Badge>
          <Badge variant="accent">TypeScript</Badge>
          <Badge variant="accent">Tailwind</Badge>
        </div>
      </div>
    </Card>
  ),
};
