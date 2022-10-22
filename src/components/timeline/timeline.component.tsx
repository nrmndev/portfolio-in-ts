import { StyledTimelineContainer, StyledTimelineItem } from "./timeline.styles";

type TimelineProps = {
  children: React.ReactNode;
};
export const TimelineContainer = ({ children }: TimelineProps) => {
  return <StyledTimelineContainer>{children}</StyledTimelineContainer>;
};

export const TimelineItem = ({ children }: TimelineProps) => {
  return <StyledTimelineItem>{children}</StyledTimelineItem>;
};
