'use client';

import Image from 'next/image';

export function HeroGraphicERP() {
  return (
    <div className="mt-10">
        <Image
          src="/images/hero_graphic_4.jpg"
          alt="Hero Graphic"
          className="w-100 h-100 object-contain border-2 border-blue-primary drop-shadow-xl"
          fill={false}
          width={692}
          height={581}
        />
    </div>
  );
}
