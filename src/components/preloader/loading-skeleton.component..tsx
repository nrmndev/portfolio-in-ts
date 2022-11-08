import { Col } from "react-bootstrap";
import { LOADING_SKELETON_TYPE } from "../theme-provider/utilities";
import { StyledLoadingSkeleton } from "./loading-skeleton.styles";

type LoadingSkeletonProps = {
  displayWidth?: string;
  displayType?: LOADING_SKELETON_TYPE;
  gap?: number;
};

// USE THIS IF YOU WANT TO LIMIT LOADERS
export const LoadingSkeleton = ({
  displayWidth = "100%",
  displayType = LOADING_SKELETON_TYPE.LINE,
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
          displayType={LOADING_SKELETON_TYPE.CIRCLE}
          displayWidth={"32%"}
          gap={10}
        />
      </Col>
      <Col>
        <LoadingSkeleton
          displayWidth={"32%"}
          gap={10}
          displayType={LOADING_SKELETON_TYPE.LINE}
        />
        <LoadingSkeleton
          displayWidth={"32%"}
          gap={10}
          displayType={LOADING_SKELETON_TYPE.LINE}
        />
        <LoadingSkeleton
          displayWidth={"32%"}
          gap={10}
          displayType={LOADING_SKELETON_TYPE.LINE}
        />
      </Col>
      <Col>
        <LoadingSkeleton
          displayType={LOADING_SKELETON_TYPE.BOX}
          displayWidth={"32%"}
          gap={10}
        />
        <LoadingSkeleton
          displayType={LOADING_SKELETON_TYPE.BOX}
          displayWidth={"32%"}
          gap={10}
        />
        <LoadingSkeleton
          displayType={LOADING_SKELETON_TYPE.BOX}
          displayWidth={"32%"}
          gap={10}
        />
      </Col>
    </>
  );
};
