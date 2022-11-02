import { useRef, useState } from "react";
import {
  BsArrowsFullscreen,
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import {
  StyledAudioButton,
  StyledCloseButton,
  StyledFullScreenButton,
  StyledPlayPauseButton,
  StyledVideoBannerTitle,
  StyledVideoWidget,
} from "./video-widget.styles";

const VideoWidget = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlay, setVideoPlay] = useState<boolean>(false);
  const [videoMute, setVideoMute] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const onPlayHandler = () => {
    if (videoRef.current) {
      videoPlay ? videoRef.current.pause() : videoRef.current.play();
      setVideoPlay(!videoPlay);
    }
  };

  const onMuteHandler = () => {
    if (videoRef.current) {
      !videoMute
        ? (videoRef.current.muted = true)
        : (videoRef.current.muted = false);
      setVideoMute(!videoMute);
    }
  };

  const onFullScreenHandler = () => {
    setFullScreen(!fullScreen);
    setVideoPlay(true);
    if (videoRef.current) {
      videoPlay ? videoRef.current.pause() : videoRef.current.play();
      setVideoPlay(!videoPlay);
    }
  };

  const onHidePlayerHandler = () => {
    setIsHidden(true);
  };
  // useEffect(()=>{
  //   videoRef.current && videoRef.current.muted = false;
  // },)

  let VideoPlayerJSX = <></>;
  if (!isHidden) {
    VideoPlayerJSX = (
      <StyledVideoWidget fullScreen={fullScreen}>
        <StyledCloseButton onClick={onHidePlayerHandler}>
          <FaTimes />
        </StyledCloseButton>
        {!fullScreen && <StyledVideoBannerTitle>Hello</StyledVideoBannerTitle>}
        <video width="144" height="192" ref={videoRef}>
          <source
            src={`${process.env.REACT_APP_ASSET_URL}/videos/work2.webm`}
            type="video/webm"
          />
        </video>
        <StyledPlayPauseButton>
          {fullScreen &&
            (videoPlay ? (
              <BsFillPauseFill onClick={onPlayHandler} />
            ) : (
              <BsFillPlayFill onClick={onPlayHandler} />
            ))}
        </StyledPlayPauseButton>
        <StyledAudioButton>
          {fullScreen &&
            (!videoMute ? (
              <GiSoundOn onClick={onMuteHandler} />
            ) : (
              <GiSoundOff onClick={onMuteHandler} />
            ))}
        </StyledAudioButton>
        <StyledFullScreenButton>
          {!fullScreen && <BsArrowsFullscreen onClick={onFullScreenHandler} />}
        </StyledFullScreenButton>
      </StyledVideoWidget>
    );
  }
  return VideoPlayerJSX;
};

export default VideoWidget;
