import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample brand data - replace with your actual brand images
  const brands = [
    {
      name: "Abercrombie & Fitch",
      logo: "https://imgs.search.brave.com/Df6ixKIMIbXHNCOnie4vgICf8vgg3RP5CzRsCyklYZE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/bG9vay5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDIv/QWJlcmNyb21iaWUt/Rml0Y2gtTG9nby01/MDB4MjgxLnBuZw",
    },
    {
      name: "AllSaints",
      logo: "https://imgs.search.brave.com/zsf1axinUOTDNG02Xja5qeA-cobCtfK_F0msnSEZ_84/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAx/L0FsbFNhaW50cy1M/b2dvLTUwMHgyODEu/anBn",
    },
    {
      name: "Barbour",
      logo: "https://imgs.search.brave.com/iT-oSybLIptLHUY7pQ77IoVk28O6vIsynS00V_m5VEE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iaWxk/ZXIuZnJhbmtvbmlh/LmRlL2ZzaS9zdGF0/aWMvYXNzZXRzL3N2/Zy9sYWJlbC9iYXJi/b3VyLnN2Zz92PWNm/MzU1ZWVkMA",
    },
    {
      name: "Bershka",
      logo: "https://imgs.search.brave.com/dBvaN2aYBae5jF961-l9LIBIOoBEGxb7vJKk-6mhz0Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmxhbmRzZWMu/Y29tL21lZGlhL2o1/YmZ1bWtuL2JlcnNo/a2EucG5n",
    },
    {
      name: "Fred Perry",
      logo: "https://imgs.search.brave.com/KQop_NlfqURyQKilxMD9bTWDiO6oUaAiLWXjVF4I0oI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2ZyZWQt/cGVycnktZmFzaGlv/bjg1MzQubG9nb3dp/ay5jb20ud2VicA",
    },
    {
      name: "Adidas",
      logo: "https://imgs.search.brave.com/krwNbGm0S1dpRF7K5ePQktSoGs5dhpxDtH_vH_CP0CY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQWRp/ZGFzLUxvZ28tUE5H/LUhELnBuZw",
    },
    {
      name: "ASOS",
      logo: "https://imgs.search.brave.com/QPLiCHgwTGQFRoGBEZ5EfQ_5kEEzFyrvVBu_zT0CCw4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L0Fzb3MtbG9nby01/MDB4MjgxLnBuZw",
    },
  ];

  const separatorLetters = ["Y", "X", "R", "A"];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, brands.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calculate transform for smooth scrolling - responsive
  const getTransform = () => {
    // Account for image width + letter container width + spacing
    const baseWidth =
      window.innerWidth > 1024
        ? 176 // 128 + 56 + margins
        : window.innerWidth > 768
        ? 156 // 112 + 48 + margins
        : window.innerWidth > 480
        ? 136 // 96 + 40 + margins
        : 116; // 80 + 32 + margins
    return `translateX(-${currentIndex * baseWidth}px)`;
  };

  return (
    <div className="w-full bg-gray-300 py-12 md:py-16 lg:py-20 relative brand-carousel">
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 md:p-2 shadow-lg transition-all duration-200"
        aria-label="Previous brand"
      >
        <ChevronLeft size={16} className="md:w-6 md:h-6 text-gray-700" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 md:p-2 shadow-lg transition-all duration-200"
        aria-label="Next brand"
      >
        <ChevronRight size={16} className="md:w-6 md:h-6 text-gray-700" />
      </button>

      {/* Carousel container */}
      <div className="overflow-hidden mx-8 md:mx-12 lg:mx-16 flex justify-center">
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{ transform: getTransform() }}
        >
          {/* Create extended array for smooth infinite scroll */}
          {[...brands, ...brands, ...brands].map((brand, index) => {
            const originalIndex = index % brands.length;
            return (
              <React.Fragment key={index}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded flex items-center justify-center shadow-sm p-2 sm:p-3 md:p-3 lg:p-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => goToSlide(originalIndex)}
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 mx-4 sm:mx-5 md:mx-6 lg:mx-8">
                  <div className="w-8 h-20 sm:w-10 sm:h-24 md:w-12 md:h-28 lg:w-14 lg:h-32 flex items-center justify-center">
                    <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-black-600 select-none">
                      {separatorLetters[index % separatorLetters.length]}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-3 md:mt-4 lg:mt-6 space-x-1 md:space-x-2">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-gray-700 w-3 md:w-4 lg:w-6"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
            aria-label={`Go to brand ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-2 md:top-4 right-2 md:right-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
            isAutoPlaying ? "bg-green-500 text-white" : "bg-gray-500 text-white"
          }`}
        >
          {isAutoPlaying ? "Auto" : "Manual"}
        </button>
      </div>

      {/* Gradient overlays - responsive */}
      <div className="absolute top-0 left-0 w-8 md:w-16 lg:w-20 h-full bg-gradient-to-r from-gray-300 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 md:w-16 lg:w-20 h-full bg-gradient-to-l from-gray-300 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default BrandCarousel;
