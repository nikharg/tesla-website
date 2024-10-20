import React, { useRef } from "react";
import cars from "../cars";
import Card from "./Card";
import { useScroll } from "framer-motion";

const Cards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="cardsAnimation" ref={container}>
      {cars.map((car, i) => {
        const targetScale = 1 - (cars.length - i) * 0.05;
        return (
          <Card
            key={i}
            {...car}
            i={i}
            range={[i * 0.2, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Cards;
