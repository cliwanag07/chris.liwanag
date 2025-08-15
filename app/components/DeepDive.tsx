import React, { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

type DeepDiveImage = {
  src: string;
  caption: string;
};

type DeepDiveProps = {
  problem: string;
  solution: string;
  impact: string;
  images?: DeepDiveImage[];
};

export const DeepDive: React.FC<DeepDiveProps> = ({
  problem,
  solution,
  impact,
  images = [],
}) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const hasImages = images.length > 0;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="border rounded-lg p-4 my-4 bg-gray-50 dark:bg-gray-800">
      <button
        className="w-full text-left font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
					<>
						Hide Deep Dive <ChevronUp size={16} />
					</>
				) : (
					<>
						Show Deep Dive <ChevronDown size={16} />
					</>
				)}
      </button>
      {open && (
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold">Problem:</h4>
            <p>{problem}</p>
          </div>
          <div>
            <h4 className="font-semibold">Solution:</h4>
            <p>{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold">Impact:</h4>
            <p>{impact}</p>
          </div>

          {hasImages && (
            <div className="mt-2">
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={images[currentImage].src}
                  alt={images[currentImage].caption}
                  className="w-full h-64 object-contain rounded"
                />
                <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {images[currentImage].caption}
                </p>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
                    >
                      ◀
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
