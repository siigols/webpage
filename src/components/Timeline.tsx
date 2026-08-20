export { Timeline } from "primereact/timeline";

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  /** Longer content revealed inline via a "see more" toggle. */
  details?: React.ReactNode;
  subItems?: TimelineEvent[];
  alignRight?: boolean;
}
