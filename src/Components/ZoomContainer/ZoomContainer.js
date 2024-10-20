import React, { useRef } from "react";
import "./zoomContainer.css";
import cyber1 from "../../photos/cyber1.jpg";
import cyber2 from "../../photos/cyber2.jpg";
import cyber3 from "../../photos/cyber3.jpg";
import cyber4 from "../../photos/cyber4.jpg";
import cyber5 from "../../photos/cyber5.jpg";
import cyberLogo from "../../photos/CybertruckLogo.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ZoomContainer = () => {
  const parallaxContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxContainer,
    offset: ["start start", "end end"],
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5.5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6.5]);

  const images = [
    {
      src: cyber1,
      scale: scale1,
      refs: "one",
    },
    {
      src: cyber2,
      scale: scale5,
      refs: "two",
    },
    {
      src: cyber3,
      scale: scale4,
      refs: "three",
    },
    {
      src: cyber4,
      scale: scale2,
      refs: "four",
    },
    {
      src: cyber5,
      scale: scale3,
      refs: "five",
    },
  ];

  return (
    <div className="zoomContainer" ref={parallaxContainer}>
      <div className="sticky">
        {images.map(({ src, scale, refs }) => {
          return (
            <motion.div style={{ scale: scale }} className="zoom" key={refs}>
              <div className="imageContainer" id={refs}>
                {refs === "one" ? (
                  <motion.img
                    id="cyberLogo"
                    src={cyberLogo}
                    alt="cyber-logo"
                    style={{ scale: scale2 }}
                  />
                ) : (
                  ""
                )}
                <img id="img" src={src} alt="cybertruck-img" />
              </div>
            </motion.div>
          );
        })}
      </div>
      ``
    </div>
  );
};

export default ZoomContainer;
