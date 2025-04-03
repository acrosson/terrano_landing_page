"use client";

import Image from "next/image";

export function HeroGraphic() {
  return (
    <div className="bg-gradient-to-br from-chart-blue-primary to-chart-blue-secondary p-2.5 sm:p-8 mt-5">
      <div className="w-full h-[200px] sm:h-[400px] p-2 sm:p-8 bg-white rounded-lg shadow-lg relative">
        <Image 
          src="/images/hero_graphic_3.png" 
          alt="Hero Graphic"
          className="w-full h-full object-contain"
          fill={false}
          width={692}
          height={581}
        />
      </div>
    </div>
  );
} 