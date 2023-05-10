import styled from "styled-components";
import { COLORS } from "../../styles/variables";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const VideoScrolled = () => {
  const introVideoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fameNumber = 0;
    const playBack = 1000;
    const duration = videoRef.current?.duration ?? 0;

    const heightVideo = Math.floor(duration) * playBack;

    console.log(heightVideo);

    ScrollTrigger.create({
      trigger: introVideoRef.current,
      scrub: true,
      pin: introVideoRef.current,
      start: "top top",
      end: `+=${heightVideo}`,
      markers: true,
      onUpdate: function (self) {
        if (videoRef.current) {
          const scrollPos = self.progress;
          const videoCurrentTime = duration * scrollPos;

          if (videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }

          // console.log(videoDuration, scrollPos, videoCurrentTime)
        }
      },
    });
  }, [videoRef, introVideoRef]);

  return (
    <>
      <Section>
        <p>Fuck you "Animation"</p>
      </Section>
      <Container ref={introVideoRef}>
        <video src="src\assets\fingers.mp4" ref={videoRef}></video>
      </Container>
    </>
  );
};

export default VideoScrolled;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Section = styled.div`
  height: 100vh;
  background-color: ${COLORS.orange_2};
  position: relative;

  p {
    font-size: 58px;
    line-height: 40px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    color: ${COLORS.black};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
