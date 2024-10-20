import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ title, src, i, progress, range, targetScale }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="cardContainer"
      ref={cardRef}
      style={{ top: `calc(-6% + ${i * 25}px)` }}
    >
      <motion.div className="card" style={{ scale: cardScale }}>
        <motion.div className="imageCar" style={{ scale: imgScale }}>
          <motion.img
            src={src}
            alt="Tesla"
            style={{ opacity: scrollYProgress }}
          />
        </motion.div>
        <div className="heading">
          <p>{title}</p>
        </div>
        <div className="buttons">
          <button id="order">
            <p>Order Now</p>
          </button>
          <button>
            <p>Demo Drive</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
