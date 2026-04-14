import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../ThemeProvider';
import { LanguageProvider } from '../LanguageProvider';

const meta = {
  title: 'Components/LanguageToggle',
  component: LanguageToggle,
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
} satisfies Meta<typeof LanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InSettingsBar: Story = {
  args: {},
  render: () => (
    <div className="flex items-center justify-end gap-2 rounded-lg border border-[var(--border)] px-4 py-2">
      <LanguageToggle />
    </div>
  ),
};

export const WithThemeToggle: Story = {
  args: {},
  render: () => (
    <div className="flex items-center justify-end gap-2 rounded-lg border border-[var(--border)] px-4 py-2">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  ),
};
