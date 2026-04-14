import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from './Timeline';
import type { TimelineEvent } from './Timeline';

const timelineMarker = () => (
  <span
    className="flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
    aria-hidden="true"
  />
);

const timelineContent = (item: TimelineEvent) => (
  <div>
    <p className="mb-1 text-xs font-medium text-[var(--text)]">{item.date}</p>
    <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">{item.title}</p>
    {item.subtitle && <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>}
    {item.description && <div className="mt-2 text-sm text-[var(--text)]">{item.description}</div>}
  </div>
);

const timelinePt = {
  root: { className: 'relative ml-1' },
  connector: { className: 'grow border-l-2 border-[var(--accent-border)]' },
  content: { className: 'pb-8 pl-4 md:pl-6 text-left' },
  opposite: { className: 'hidden' },
};

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

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkExperience: Story = {
  args: {
    value: workEvents,
    content: timelineContent,
    marker: timelineMarker,
    pt: timelinePt,
  },
};

export const Education: Story = {
  args: {
    value: eduEvents,
    content: timelineContent,
    marker: timelineMarker,
    pt: timelinePt,
  },
};

export const SingleItem: Story = {
  args: {
    value: [
      {
        date: '2024 – Present',
        title: 'Freelance Consultant',
        subtitle: 'Self-employed',
        description: <p>Providing technical consulting for startups and agencies.</p>,
      },
    ],
    content: timelineContent,
    marker: timelineMarker,
    pt: timelinePt,
  },
};
