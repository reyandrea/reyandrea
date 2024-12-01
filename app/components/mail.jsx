"use client";

import Link from 'next/link';

export default function MailIcon({ size = 40 }) {
  return (
    <Link
      href="mailto:andrealarioza@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mail-icon z-50"
    >
      <svg
        className="svg-snoweb svg-theme-light"
        height="100%" // Ensures SVG scales to the link's height
        width="100%" // Ensures SVG scales to the link's width
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip-path-202411-3011-2343-6ac35d84-8e73-4b82-b96d-c3a11528eeac">
          <circle cx="50" cy="50" r="50" className="circle-clipped" />
        </clipPath>
        <circle className="svg-fill-tertiary" cx="50" cy="50" r="50" />
        <circle className="svg-fill-secondary svg-builder-circle" cx="50" cy="50" r="50" />
        <g transform="translate(10.00, 10.00) scale(0.80, 0.80)">
          <path
            className="svg-fill-primary svg-stroke-primary"
            d="M12.2,33.2,45.3,55.3a8.5,8.5,0,0,0,9.4,0L87.8,33.2M20.6,79.4H79.4A8.3,8.3,0,0,0,87.8,71V29a8.3,8.3,0,0,0-8.4-8.4H20.6A8.3,8.3,0,0,0,12.2,29V71A8.3,8.3,0,0,0,20.6,79.4Z"
          />
        </g>
      </svg>
    </Link>
  );
}
