export { Timeline } from 'primereact/timeline';

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
}
