import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline, TimelineItem } from './Timeline';

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  subcomponents: { TimelineItem: TimelineItem as React.ComponentType<unknown> },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkExperience: Story = {
  args: { children: 'Timeline' },
  render: () => (
    <Timeline>
      <TimelineItem
        date="2023 – Present"
        title="Senior Software Engineer"
        subtitle="Acme Corp"
      >
        <p>
          Leading the frontend team in building a next-generation design system.
          Working with React, TypeScript, and Tailwind CSS.
        </p>
      </TimelineItem>
      <TimelineItem
        date="2021 – 2023"
        title="Software Engineer"
        subtitle="StartupCo"
      >
        <p>
          Built and maintained the customer-facing web application. Implemented
          real-time features and improved performance by 40%.
        </p>
      </TimelineItem>
      <TimelineItem
        date="2019 – 2021"
        title="Junior Developer"
        subtitle="WebAgency"
      >
        <p>
          Developed responsive websites and web applications for various
          clients. Gained experience in modern frontend tooling.
        </p>
      </TimelineItem>
    </Timeline>
  ),
};

export const Education: Story = {
  args: { children: 'Timeline' },
  render: () => (
    <Timeline>
      <TimelineItem
        date="2016 – 2019"
        title="B.Sc. Computer Science"
        subtitle="University of Technology"
      >
        <p>
          Focused on software engineering, algorithms, and web technologies.
          Graduated with honors.
        </p>
      </TimelineItem>
      <TimelineItem
        date="2013 – 2016"
        title="High School Diploma"
        subtitle="Science Academy"
      />
    </Timeline>
  ),
};

export const SingleItem: Story = {
  args: { children: 'Timeline' },
  render: () => (
    <Timeline>
      <TimelineItem
        date="2024 – Present"
        title="Freelance Consultant"
        subtitle="Self-employed"
      >
        <p>Providing technical consulting for startups and agencies.</p>
      </TimelineItem>
    </Timeline>
  ),
};
