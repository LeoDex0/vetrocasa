import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 9h2.5V6h-2.5c-1.933 0-3.5 1.567-3.5 3.5V11H8.5v3H10.5v6h3v-6h2.25l.75-3H13.5V9.5c0-.276.224-.5.5-.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.85" cy="7.15" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 3.5c.35 2.05 1.75 3.55 3.9 3.75v2.55a6.6 6.6 0 0 1-3.9-1.25v6.2a4.75 4.75 0 1 1-4.1-4.7v2.62a2.13 2.13 0 1 0 1.6 2.06V3.5H14Z" />
    </svg>
  );
}
