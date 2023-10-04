"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const imageUrls = [
  "/images/ad.png",
  "/images/a2.png",
  "/images/af.png",
  "/images/ag.png",
  "/images/ai.png",
  "/images/al.png",
  "/images/am.png",
  "/images/ao.png",
  "/images/aq.png",
  "/images/ar.png",
  "/images/as.png",
  "/images/at.png",
  "/images/au.png",
  "/images/aw.png",
  "/images/ax.png",
  "/images/az.png",
  "/images/ba.png",
]


const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (imageUrls) => {
  return shuffle(imageUrls).map((url, index) => (
    <motion.div
      key={index}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      }}
    >
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const squares = generateSquares(imageUrls);

  return (
    <div className="grid grid-cols-6 grid-rows-6 h-full gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

const ShuffleHero = () => {
  return (
    <ShuffleGrid />
  );
};



export default ShuffleHero;