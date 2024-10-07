import React from "react";
import { Book, Info } from "lucide-react";

import { Button } from "./ui/button";

type SplashProps = {
  handleReady: () => void;
};

export const Splash: React.FC<SplashProps> = ({ handleReady }) => {
  return (
    <main className="w-full flex items-center justify-center bg-primary-200 p-4 bg-[length:auto_50%] lg:bg-auto bg-colorWash bg-no-repeat bg-right-top">
      <div className="flex flex-col gap-8 lg:gap-12 items-center max-w-full lg:max-w-3xl">
        <div className="w-40 h-40 mb-4">
          <svg width="100%" height="100%" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <title>Wingmate Magic Hat</title>
            <path d="M92.72,94.69c14,2.6,23.28,7.25,23.28,12.56C116,115.4,94.06,122,67,122s-49-6.6-49-14.75c0-5.1,8.6-9.6,21.67-12.25Z" fill="#8b5eaa"/>
            <path d="M54.55,112.51a24.67,24.67,0,0,1-23.75,4.68c-8-2.62-12.8-6.11-12.8-9.94,0-5.1,8.6-9.6,21.67-12.25h1.67l-4.22,12.65v0L37,108l.55.14C39.92,110.35,46.55,111.81,54.55,112.51Z" fill="#7b4d9e"/>
            <path d="M100.17,111.19c2.49-2.74,2.44-5.69-.4-8.44a3.27,3.27,0,0,1,3.2-5.51q1,.32,2,.69c16.42,6,13.35,13.9-.92,19A3.55,3.55,0,0,1,100.17,111.19Z" fill="#b091ce"/>
            <path d="M93.78,99,96,108l-1.15.32c-3.3,2.55-12.08,4.05-21.85,4.52v-10C81.86,102.41,89.9,101.14,93.78,99Z" fill="#ffdca4"/>
            <path d="M96,108l-1.15.32c-3.3,2.55-12.08,4-21.85,4.52V110.3a61.74,61.74,0,0,0,11-2.58A5.59,5.59,0,0,0,87.78,101h0a23.43,23.43,0,0,0,6-2Z" fill="#ffe8c7"/>
            <path d="M39.84,99.55c4.15,1.84,11.81,3,20.16,3.32v10c-10.91-.48-20.61-2.22-22.89-5.2Z" fill="#ffc050"/>
            <path d="M39.84,99.55c4.15,1.84,11.81,3,20.16,3.32v10c-10.91-.48-20.61-2.22-22.89-5.2Z" fill="#db952e"/>
            <path d="M60,102.87v10c-10.91-.48-20.61-2.22-22.89-5.2l.09-.28c2.07.4,4.38.73,6.86,1A6.29,6.29,0,0,0,51,102.13h0C53.8,102.49,56.85,102.73,60,102.87Z" fill="#edab3f"/>
            <path d="M93.78,99c-3.14,1.72-9,2.88-15.8,3.49-1.62.14-3.28.26-5,.34V100H60v2.87a92,92,0,0,1-15-1.74,27,27,0,0,1-5.16-1.58l1.36-4L48.07,75.1h0l-2.25-4.46L43.47,66,53.86,53.36l3.38-4.11-2.65-12.4L53.9,33.6,52,34,20,22,60.09,9.21l.13,0a8,8,0,0,1,9.72,4.32L89.18,56l-6.1,12,5.12,8.3,4.52,18.36Z" fill="#8b5eaa"/>
            <path d="M93.78,99c-3.14,1.72-9,2.88-15.8,3.49-1.62.14-3.28.26-5,.34V100H60v2.87a92,92,0,0,1-15-1.74,27,27,0,0,1-5.16-1.58l1.36-4L48.07,75.1h0l-2.25-4.46L43.47,66,53.86,53.36l3.38-4.11-2.65-12.4L53.9,33.6,52,34,20,22,60.09,9.21l.13,0a8,8,0,0,1,9.72,4.32L89.18,56l-6.1,12,5.12,8.3,4.52,18.36Z" fill="#8b5eaa"/>
            <path d="M92.72,94.69,88.2,76.33,83.08,68l6.1-12L69.94,13.49A8,8,0,0,0,64,8.91l9.43,40.35a9.17,9.17,0,0,1-4.48,10.1h0a8.1,8.1,0,0,0-3.86,4.89l-2.33,8.29A2.73,2.73,0,0,0,65.47,75h.91a3.31,3.31,0,0,1,3.3,3l.4,4.91A4.67,4.67,0,0,1,65.44,88h0A3.44,3.44,0,0,0,62,91.44v5.13A3.44,3.44,0,0,0,65.44,100H73v2.84c1.7-.08,3.36-.2,5-.34,6.81-.61,12.66-1.77,15.8-3.49Z" fill="#b091ce"/>
            <path d="M59.68,102.85,60,100v2.87Z" fill="#b091ce"/>
            <polygon points="52.32 26.24 20 22 54.18 34.94 52.32 26.24" fill="#7b4d9e"/>
            <path d="M45.69,99.07,45,101.13a27,27,0,0,1-5.16-1.58L48.07,75.1l4.72,4.71C55.08,88.26,50.17,93.18,45.69,99.07Z" fill="#7b4d9e"/>
            <path d="M73,112.84c-4.27.21-8.73.21-13,0V100H73v12.84Z" fill="#ffe8c7"/>
            <path d="M60.1,109.9H60V100H70v.33A9.56,9.56,0,0,1,60.1,109.9Z" fill="#ffc050"/>
            <path d="M106.12,95.15c-3.71-1.38-5.81,4.24-2.09,5.63,6.62,2.46,9,5,9,6.47,0,4.1-15.8,11.75-46,11.75s-46-7.65-46-11.75c0-2,4.34-5.75,16-8.57L34.16,107c-1.27,3.78,4.42,5.68,5.69,1.91l1.88-5.58A75.2,75.2,0,0,0,57,105.59v4.06a77.68,77.68,0,0,1-11-1.36c-3.87-.83-5.13,5-1.24,5.87,16.52,3.5,56.46,1.86,54.15-6.93-9.28-37.65-6.42-29.67-12.38-39.34l5.34-10.52c.92-1.82,1.67,1-19.19-45.12A11,11,0,0,0,59.3,6.31L19.09,19.14a3,3,0,0,0-.14,5.67C19.4,25,51.07,36.89,51.55,37L54,48.46,41.15,64.08a3,3,0,0,0-.36,3.26l4,8L39.2,92C30.87,93.39,15,98.28,15,107.25c0,23.6,104,23.6,104,0C119,102.39,114.67,98.32,106.12,95.15ZM63,109.87v-4c2.28,0,4.37.05,7,0v4C67.68,109.88,65.33,109.9,63,109.87Zm28.69-6.81.85,3.47c-3.28,1.42-9.46,2.45-16.55,3v-3.94C82,105.16,87.84,104.37,91.69,103.06ZM59.55,51.15c1.24-1.51,1-.76-3.9-23.69-.83-3.87-6.7-2.63-5.87,1.25l.29,1.36L29.15,22.23,61.13,12a5,5,0,0,1,6.08,2.7L85.86,55.94l-3,6-1.75-2.84C79,55.69,73.89,58.83,76,62.21L85.4,77.5l4.86,19.72C88.16,98,83.31,99,76,99.55A3,3,0,0,0,73,97H60a3,3,0,0,0-3,2.58,71.24,71.24,0,0,1-13.41-1.89l5.18-15.41a3,3,0,0,0,4.29-3.87L47,66.38Z" fill="#31352e"/>
          </svg>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance text-left">
          Wingmate Agent
        </h1>

        <p className="text-primary-500 text-xl font-semibold leading-relaxed text-center">
          Once upon a time, in a world of endless to-do lists...
        </p>

        <p className="text-primary-700 text-lg leading-relaxed text-center">
          ...there was Wingmate, a magical AI companion who swooped in to rescue 
          overwhelmed humans from the chaos of their daily lives. With a flick of 
          its digital wand, it organized tasks, conjured up schedules, and sprinkled 
          productivity pixie dust wherever it went.
        </p>

        <Button onClick={() => handleReady()}>Begin Your Adventure</Button>

        <div className="h-[1px] bg-primary-300 w-full" />

        <footer className="flex flex-col lg:gap-2">
          <Button variant="light" asChild>
            <a
              href="#magical-powers"
              className="text-indigo-600"
            >
              <Info className="size-6" />
              Discover Wingmate Magical Powers
            </a>
          </Button>

          <Button variant="light" asChild>
            <a
              href="#origin-story"
              className="text-indigo-600"
            >
              <Book className="size-6" />
              The Origin Story of Wingmate
            </a>
          </Button>
        </footer>
      </div>
    </main>
  );
};

export default Splash;
