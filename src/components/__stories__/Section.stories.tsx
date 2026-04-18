import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from '../Section';

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Projects',
    children: (
      <p style={{ color: 'var(--text)' }}>Section content goes here.</p>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Work Experience',
    description:
      'A timeline of my professional career and the companies I have worked with.',
    children: (
      <p style={{ color: 'var(--text)' }}>Timeline content would go here.</p>
    ),
  },
};

export const WithId: Story = {
  args: {
    title: 'Education',
    id: 'education',
    description: 'My academic background and certifications.',
    children: (
      <p style={{ color: 'var(--text)' }}>
        This section has <code>id="education"</code> for anchor linking.
      </p>
    ),
  },
};
