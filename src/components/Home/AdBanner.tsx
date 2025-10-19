"use client";

import Image from "next/image";

export default function AdBanner({
  display = "false",
  title,
  description,
  img,
}: {
  display: string;
  title: string;
  description: string;
  img: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-border/50 ${
        display ? "" : "hidden"
      }`}
    >
      {/* 16:9 aspect ratio container */}
      {/* <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {/* Placeholder for actual banner image with enhanced dark theme gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-card/50 to-tertiary/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-105"> */}
      <div className="relative w-full aspect-video">
        <Image
          src={img}
          alt="Promotional banner"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* When you have an actual image, replace the div above with: */}

      {/* </div> */}
    </div>
  );
}
