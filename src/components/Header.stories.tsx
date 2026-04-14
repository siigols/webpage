import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { SocialLink } from './SocialLink';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Sigurd Olsen',
    title: 'Software Engineer',
  },
};

export const WithAvatar: Story = {
  args: {
    name: 'Sigurd Olsen',
    title: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/150?u=sigurd',
  },
};

export const WithSocialLinks: Story = {
  args: { name: 'Sigurd Olsen', title: 'Software Engineer' },
  render: () => (
    <Header name="Sigurd Olsen" title="Software Engineer">
      <SocialLink href="https://github.com" icon="github-icon" label="GitHub" />
      <SocialLink href="https://bsky.app" icon="bluesky-icon" label="Bluesky" />
      <SocialLink href="https://x.com" icon="x-icon" label="X / Twitter" />
    </Header>
  ),
};

export const WithAvatarAndLinks: Story = {
  args: { name: 'Sigurd Olsen', title: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?u=sigurd' },
  render: () => (
    <Header
      name="Sigurd Olsen"
      title="Software Engineer"
      avatar="https://i.pravatar.cc/150?u=sigurd"
    >
      <SocialLink href="https://github.com" icon="github-icon" label="GitHub" />
      <SocialLink href="https://bsky.app" icon="bluesky-icon" label="Bluesky" />
    </Header>
  ),
};

export const LongName: Story = {
  args: {
    name: 'Alexander Sebastian Montgomery-Fitzgerald',
    title: 'Principal Staff Software Engineer & Technical Lead',
  },
};
