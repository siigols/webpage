import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../ThemeProvider';
import { LanguageProvider } from '../LanguageProvider';

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <Story />
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InSettingsBar: Story = {
  args: {},
  render: () => (
    <div className="flex items-center justify-end gap-2 rounded-lg border border-[var(--border)] px-4 py-2">
      <ThemeToggle />
    </div>
  ),
};
