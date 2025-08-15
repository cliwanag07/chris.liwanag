"use client";

import { useState } from "react";

type VideoModalProps = {
  videoUrl: string;
  trigger: React.ReactNode; // the clickable text/element
};

const VideoModal = ({ videoUrl, trigger }: VideoModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <span
        onClick={() => setOpen(true)}
        className="cursor-pointer underline underline-offset-2 decoration-blue-500 hover:decoration-blue-600"
        style={{ color: "inherit" }} // inherit text color from parent (li)
      >
        {trigger}
      </span>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          {/* Stop click inside video from closing */}
          <div
            className="relative bg-black rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={videoUrl}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
