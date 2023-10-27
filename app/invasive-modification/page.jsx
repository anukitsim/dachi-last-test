"use client";

import Image from "next/image";
import { useState } from "react";

const Invasive = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const imageFiles = [
    "card1.webp",
    "card2.webp",
    "card3.webp",
    "card4.webp",
    "card5.webp",
    "card6.webp",
    "card7.webp",
    "card8.webp",
    "card9.webp",
  ];

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
  };

  const goToImage = (index) => {
    setImageIndex(index);
  };

  return (
    <div className="md:grid md:grid-cols-12 md:grid-rows-2 md:transform md:translate-x-0.5 md:translate-y-36  mt-1 sm:flex sm:flex-col sm:m-5">
      <h2 className="text-[#484848] font-MPlus1 z-10 text-lg md:col-start-1 md:col-span-8 md:row-start-1 ">
        Set Design for the Georgian footwear brand Invasive Modifications
      </h2>
      <Image
        src="/images/1.webp"
        alt="invasive-1"
        width={500}
        height={500}
        sizes="(min-width: 1200px) calc(43.44vw - 75px), calc(100vw - 40px)"
        className="md:w-8/12 sm:w-full h-auto z-0 md:col-start-1 md:row-start-1 md:row-span-2 md:col-span-10"
        priority
      />
      <h2 className="text-[#484848] font-MPlus1 z-10 text-lg md:col-start-7 md:col-span-6 md:row-start-1 md:self-center sm:mb-5">
      Translating language at the core of brands world through artefacts
        within the current realm
      </h2>

      <Image
        alt={`card ${imageIndex + 1}`}
        src={`/images/${imageFiles[imageIndex]}`}
        width={700}
        height={600}
        sizes="(min-width: 2860px) 700px, (min-width: 1200px) calc(26.22vw - 48px), (min-width: 780px) 700px, calc(95.65vw - 27px)" 
        className="z-10 col-start-1 col-span-4 row-start-2 md:self-end sm:self-start"
        onClick={nextImage}
        priority
      />
      <div className="flex col-start-1 col-span-2 mt-5 mb-5 row-start-3 self-end sm:self-start justify-start items-center gap-2 z-50">
        {imageFiles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-2 w-2  rounded-full ${
              imageIndex === index ? "bg-gray-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="md:col-start-5 md:col-span-3 md:row-start-2 md:self-end sm:self-start md:z-50 md:ml-5 sm:ml-0">
        <p className="text-[#484848] font-MPlus1 font-thin tracking-normal text-sm leading-6">
          Photography:
          <br />
          <span>Giorgi Nakashidze</span>
          <br />
          <span>Ika Khargelia</span>
          <br />
          <span>Luka Pantskhava</span>
          <br />
          <br />
          <span>Prop Assistant:</span>
          <br />
          <span>Polina Zhuravkova</span>``
          <br />
          <br />
          <span>Invasive Modification:</span>
          <br />
          <span>Nicolas Grigorian</span>
          <br />
          <span>Nina Ivanovna</span>
        </p>
      </div>
    </div>
  );
};

export default Invasive;
