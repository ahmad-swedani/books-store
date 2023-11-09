import React from "react";

function DashboardIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h22v22H0z" />
        <path
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m7.111 7.111.324.324M5.5 11h.458M16.042 11h.458M14.565 7.435l.324-.324M11 5.5v.458"
        />
        <circle
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="11"
          cy="11"
          r="8.25"
        />
        <path
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 13.75v-3.667M17.87 15.565a13.99 13.99 0 0 0-13.74 0"
        />
      </g>
    </svg>
  );
}

function UserNotActiveIcon({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
    </svg>
  );
}

function BackArrow({ width, height, className }) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
}

export { DashboardIcon, UserNotActiveIcon, BackArrow };
