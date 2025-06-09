"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

type Contributor = {
  name: string;
  location: string;
  focus: string;
  image: string;
  github: string;
  linkedin: string;
};

export default function ContributorSlider({ contributors }: { contributors: Contributor[] }) {
  return (
    <Marquee
      direction="left"
      speed={30}
      gradient={true}
      gradientWidth={80}
      pauseOnHover={false}
      pauseOnClick={false}
      play={true}
      className="py-6 overflow-hidden"
    >
      {contributors.map((contributor, index) => (
        <a
          key={index}
          href={contributor.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 block group"
        >
          <div className="flex items-center space-x-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-white to-blue-50/50 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5 shadow-lg group-hover:shadow-blue-500/25">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contributor.name)}&background=6366f1&color=ffffff&size=44`;
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col min-w-0">
              <h4 className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {contributor.name} ✨
              </h4>
              <p className="text-xs text-gray-600 truncate font-medium">
                🚀 {contributor.focus}
              </p>
            </div>
          </div>
        </a>
      ))}
      
      {/* Join Contributors Card */}
      <a
        href="https://github.com/turify"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 block group"
      >
        <div className="flex items-center space-x-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border-2 border-blue-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4">
              <div className="w-full h-full bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-full h-full bg-blue-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col min-w-0">
            <h4 className="text-sm font-bold text-blue-700 group-hover:text-purple-700 transition-colors">
              Join Us! 🎉
            </h4>
            <p className="text-xs text-blue-600 font-medium">
              ⭐ Become a contributor
            </p>
          </div>
        </div>
      </a>
    </Marquee>
  );
}

export type { Contributor }; 