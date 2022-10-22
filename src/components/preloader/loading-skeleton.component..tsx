import { Col, Row } from "react-bootstrap";
import { StyledLoadingSkeleton } from "./loading-skeleton.styles";

export enum SkeletonType {
  CIRCLE = "circle",
  LINE = "line",
  BOX = "box",
}

type LoadingSkeletonProps = {
  displayWidth?: string;
  displayType?: SkeletonType;
  gap?: number;
};

// USE THIS IF YOU WANT TO LIMIT LOADERS
export const LoadingSkeleton = ({
  displayWidth = "100%",
  displayType = SkeletonType.LINE,
  gap = 0,
}: LoadingSkeletonProps) => {
  return (
    <StyledLoadingSkeleton
      displayWidth={displayWidth}
      displayType={displayType}
      gap={gap}
    />
  );
};

/// USE THIS IF YOU WANT PREMADE LOADING SKELETON PAGE
export const LoadingSkeletonPage = () => {
  return (
    <>
      <Col md={{ span: 4, offset: 4 }}>
        <LoadingSkeleton
          displayType={SkeletonType.CIRCLE}
          displayWidth={"32%"}
          gap={10}
        />
      </Col>
      <Col>
        <LoadingSkeleton
          displayWidth={"32%"}
          gap={10}
          displayType={SkeletonType.LINE}
        />
        <LoadingSkeleton
          displayWidth={"32%"}
          gap={10}
          displayType={SkeletonType.LINE}
        />
        <LoadingSkeleton
          displayWidth={"32%"}
          gap={10}
          displayType={SkeletonType.LINE}
        />
      </Col>
      <Col>
        <LoadingSkeleton
          displayType={SkeletonType.BOX}
          displayWidth={"32%"}
          gap={10}
        />
        <LoadingSkeleton
          displayType={SkeletonType.BOX}
          displayWidth={"32%"}
          gap={10}
        />
        <LoadingSkeleton
          displayType={SkeletonType.BOX}
          displayWidth={"32%"}
          gap={10}
        />
      </Col>
    </>
  );
};
