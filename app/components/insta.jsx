"use client";

import Link from 'next/link';

export default function Instagram() {
  return (
    <Link
      href="https://www.instagram.com/andrealarioza/"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-icon z-50"
    >
      <svg
        className="svg-snoweb svg-theme-light block" // Make sure SVG is block-level
        height="100%" // Makes SVG scale to the link's width and height
        width="100%" // Makes SVG scale to the link's width and height
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip-path-202411-3011-0746-ceaa21ff-9f1f-4c97-9e58-fb74a711a4c9">
          <circle cx="50" cy="50" r="50" className="circle-clipped" />
        </clipPath>
        <circle className="svg-fill-tertiary" cx="50" cy="50" r="50" />
        <circle className="svg-fill-secondary svg-builder-circle" cx="50" cy="50" r="50" />
        <g transform="translate(20.00, 20.00) scale(0.60, 0.60)">
          <path
            className="svg-fill-primary"
            d="M50,24.37A25.63,25.63,0,1,0,75.64,50,25.59,25.59,0,0,0,50,24.37Zm0,42.29A16.66,16.66,0,1,1,66.68,50,16.69,16.69,0,0,1,50,66.66ZM82.67,23.32a6,6,0,1,1-6-6A6,6,0,0,1,82.67,23.32Zm17,6.07c-.38-8-2.21-15.11-8.08-21S78.63.76,70.62.36c-8.25-.47-33-.47-41.24,0-8,.38-15.09,2.21-20.95,8.06S.75,21.36.35,29.36c-.47,8.26-.47,33,0,41.25.38,8,2.21,15.11,8.08,21s12.94,7.68,21,8.08c8.25.47,33,.47,41.24,0,8-.38,15.11-2.21,20.95-8.08s7.68-12.94,8.08-21c.47-8.25.47-33,0-41.22ZM89,79.47a16.84,16.84,0,0,1-9.5,9.5C72.9,91.58,57.28,91,50,91s-22.91.58-29.47-2a16.84,16.84,0,0,1-9.5-9.5C8.43,72.89,9,57.27,9,50s-.58-22.91,2-29.47a16.87,16.87,0,0,1,9.5-9.5C27.12,8.42,42.74,9,50,9s22.91-.58,29.47,2a16.84,16.84,0,0,1,9.5,9.5c2.62,6.58,2,22.2,2,29.47S91.6,72.91,89,79.47Z"
          />
        </g>
      </svg>
    </Link>
  );
}
