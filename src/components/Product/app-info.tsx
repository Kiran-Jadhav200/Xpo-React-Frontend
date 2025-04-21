'use client';

import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function AppInfo() {
  const searchParams = useSearchParams();

  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const image = searchParams.get('image');
  const featuresRaw = searchParams.get('features');

  let parsedFeatures: string[] = [];
  if (featuresRaw) {
    try {
      parsedFeatures = JSON.parse(featuresRaw);
    } catch (err) {
      console.error('Failed to parse features:', err);
    }
  }

  return (
    <section className="bg-[#020c1b] w-full min-h-screen flex flex-col items-center py-12 px-6 text-white">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-extrabold text-center text-white mb-12">Our Applications</h1>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-poppins">
            {title}
          </h2>
          <p className="text-lg text-white/85 mt-4 leading-relaxed font-poppins">
            {description}
          </p>
        </div>
        {image && (
          <div className="lg:w-1/2 relative">
            <Image
              src={image}
              alt="Application Screenshot"
              width={1400}
              height={700}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        )}
      </div>

      {parsedFeatures.length > 0 && (
        <div className="w-full max-w-7xl mt-12">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <ul className="text-lg text-white/85 list-disc pl-6 space-y-2 font-poppins">
            {parsedFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
