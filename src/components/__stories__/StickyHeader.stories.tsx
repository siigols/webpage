import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimeReactProvider } from 'primereact/api';
import { useRef } from 'react';
import { StickyHeader } from '../StickyHeader';
import { ThemeProvider } from '../../ThemeProvider';
import { LanguageProvider } from '../../LanguageProvider';

const meta = {
  title: 'Components/StickyHeader',
  component: StickyHeader,
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
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StickyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

function WithSentinelPreview() {
  const sentinelRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ minHeight: '140vh', paddingTop: '70px' }}>
      <div ref={sentinelRef} style={{ height: '1px' }} />
      <StickyHeader sentinelRef={sentinelRef} />
      <div style={{ padding: '2rem', color: 'var(--text)' }}>
        Scroll down to show the sticky header and back up to hide it.
      </div>
    </div>
  );
}

export const WithSentinel: Story = {
  render: () => <WithSentinelPreview />,
};
