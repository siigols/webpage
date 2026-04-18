import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimeReactProvider } from 'primereact/api';
import { ContactItem } from '../ContactItem';
import { ThemeProvider } from '../../ThemeProvider';
import { LanguageProvider } from '../../LanguageProvider';

const meta = {
  title: 'Components/ContactItem',
  component: ContactItem,
  tags: ['autodocs'],
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
} satisfies Meta<typeof ContactItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    icon: 'email-icon',
    label: 'Email',
    value: 'hello@example.com',
  },
};

export const Phone: Story = {
  args: {
    icon: 'phone-icon',
    label: 'Phone',
    value: '+47 999 99 999',
  },
};
