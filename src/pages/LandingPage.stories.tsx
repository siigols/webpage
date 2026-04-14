import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimeReactProvider } from 'primereact/api';
import { LandingPage } from './LandingPage';
import { ThemeProvider } from '../ThemeProvider';
import { LanguageProvider } from '../LanguageProvider';

const meta = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <PrimeReactProvider value={{ unstyled: true }}>
        <ThemeProvider>
          <LanguageProvider>
            <Story />
          </LanguageProvider>
        </ThemeProvider>
      </PrimeReactProvider>
    ),
  ],
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
