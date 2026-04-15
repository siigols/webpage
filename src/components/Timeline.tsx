export { Timeline } from "primereact/timeline";

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  subItems?: TimelineEvent[];
  seeMoreHref?: string;
  seeMoreLabel?: string;
  alignRight?: boolean;
}
