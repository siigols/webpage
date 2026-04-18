import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimeReactProvider } from 'primereact/api';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ExperienceDetailPage } from '../ExperienceDetailPage';
import { ThemeProvider } from '../../ThemeProvider';
import { LanguageProvider } from '../../LanguageProvider';

const meta = {
  title: 'Pages/ExperienceDetailPage',
  component: ExperienceDetailPage,
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
} satisfies Meta<typeof ExperienceDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/erfaring/sparebanken-norge']}>
      <Routes>
        <Route path="/erfaring/:slug" element={<ExperienceDetailPage />} />
      </Routes>
    </MemoryRouter>
  ),
};

export const NotFound: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/erfaring/unknown-role']}>
      <Routes>
        <Route path="/erfaring/:slug" element={<ExperienceDetailPage />} />
      </Routes>
    </MemoryRouter>
  ),
};
