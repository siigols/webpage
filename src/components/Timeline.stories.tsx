import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from './Timeline';
import type { TimelineEvent } from './Timeline';

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const workEvents: TimelineEvent[] = [
  {
    date: '2023 – Present',
    title: 'Senior Software Engineer',
    subtitle: 'Acme Corp',
    description: (
      <p>Leading the frontend team in building a next-generation design system. Working with React, TypeScript, and Tailwind CSS.</p>
    ),
  },
  {
    date: '2021 – 2023',
    title: 'Software Engineer',
    subtitle: 'StartupCo',
    description: (
      <p>Built and maintained the customer-facing web application. Implemented real-time features and improved performance by 40%.</p>
    ),
  },
  {
    date: '2019 – 2021',
    title: 'Junior Developer',
    subtitle: 'WebAgency',
    description: (
      <p>Developed responsive websites and web applications for various clients. Gained experience in modern frontend tooling.</p>
    ),
  },
];

const eduEvents: TimelineEvent[] = [
  {
    date: '2016 – 2019',
    title: 'B.Sc. Computer Science',
    subtitle: 'University of Technology',
    description: (
      <p>Focused on software engineering, algorithms, and web technologies. Graduated with honors.</p>
    ),
  },
  {
    date: '2013 – 2016',
    title: 'High School Diploma',
    subtitle: 'Science Academy',
  },
];

export const WorkExperience: Story = {
  args: { events: workEvents },
};

export const Education: Story = {
  args: { events: eduEvents },
};

export const SingleItem: Story = {
  args: {
    events: [
      {
        date: '2024 – Present',
        title: 'Freelance Consultant',
        subtitle: 'Self-employed',
        description: <p>Providing technical consulting for startups and agencies.</p>,
      },
    ],
  },
};
