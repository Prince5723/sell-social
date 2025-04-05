"use client";
import React, { ReactElement } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const handleCardClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
  <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
    {cards.map((card, i) => (
      <div
        key={i}
        className={cn(
          card.id === 1 || card.id === 4 || card.id === 5 ? "md:col-span-2" : "col-span-1",
          "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer relative md:h-64"
        )}
        onClick={() => handleCardClick(card.link)}
      >
        <div className="w-full h-full border border-slate-50 rounded-lg overflow-hidden">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="object-contain md:object-cover object-top h-full w-full transition-all duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-start p-6 pointer-events-none">
          <h3 className="font-bold text-xl text-gray-200">{card.title}</h3>
          <p className="text-gray-400 text-base line-clamp-3">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
);

  
};

export function Projects() {
  const cards = [
    {
      id: 1,
      title: "",
      description: "",
      thumbnail: "/develpix-front1.png",
      link: "https://develpix.com/"
    },
    {
      id: 2,
      title: "",
      description: "",
      thumbnail: "/bricks-front.png",
      link: "https://bricks-and-house.netlify.app/"
    },
    {
      id: 3,
      title: "",
      description: "",
      thumbnail: "/lotlite-front.png",
      link: "https://lotlite-tech.netlify.app/"
    },
    {
      id: 4,
      title: "",
      description: "",
      thumbnail: "/walkby-front.png",
      link: "https://walkby.tech/"
    },
    {
      id: 5,
      title: "",
      description: "",
      thumbnail: "/recollect-front.png",
      link: "https://recollectai.me/"
    },
    {
      id: 6,
      title: "",
      description: "",
      thumbnail: "/paradise-front.png",
      link: "https://paradise-productions.in/"
    },
  ];

  return (
    <div className="w-full bg-black">
      <LayoutGrid cards={cards} />
    </div>
  );
}