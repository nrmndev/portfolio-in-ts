import { useCallback, useEffect, useState } from "react";
import StyledPageProgressBar from "./page-progressbar.style";

type PageProgressBarProps = {
  bg?: string;
};

const PageProgressBar = ({ bg = "#000" }: PageProgressBarProps) => {
  const [progressBar, setProgressBar] = useState<number>(10);

  const handleScroll = useCallback(() => {
    let position =
      ((window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight) *
      100;
    setProgressBar(position);
  }, []);

  useEffect(() => {
    if (progressBar > 0) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, progressBar]);

  return (
    <StyledPageProgressBar bg={bg}>
      <div
        className="progressbar_highlight"
        style={{ width: progressBar ? progressBar + "%" : "11%" }}
      ></div>
    </StyledPageProgressBar>
  );
};

export default PageProgressBar;
