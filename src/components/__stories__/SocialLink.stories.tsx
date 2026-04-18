import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialLink } from '../SocialLink';

const meta = {
  title: 'Components/SocialLink',
  component: SocialLink,
  tags: ['autodocs'],
  argTypes: {
    icon: {
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
  },
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    href: 'https://github.com',
    icon: 'github-icon',
    label: 'GitHub',
  },
};

export const Bluesky: Story = {
  args: {
    href: 'https://bsky.app',
    icon: 'bluesky-icon',
    label: 'Bluesky',
  },
};

export const X: Story = {
  args: {
    href: 'https://x.com',
    icon: 'x-icon',
    label: 'X / Twitter',
  },
};

export const Discord: Story = {
  args: {
    href: 'https://discord.com',
    icon: 'discord-icon',
    label: 'Discord',
  },
};

export const SocialBar: Story = {
  args: { href: 'https://github.com', icon: 'github-icon', label: 'GitHub' },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <SocialLink href="https://github.com" icon="github-icon" label="GitHub" />
      <SocialLink href="https://bsky.app" icon="bluesky-icon" label="Bluesky" />
      <SocialLink href="https://x.com" icon="x-icon" label="X / Twitter" />
      <SocialLink
        href="https://discord.com"
        icon="discord-icon"
        label="Discord"
      />
    </div>
  ),
};
