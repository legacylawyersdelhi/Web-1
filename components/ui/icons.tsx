import type { SVGProps } from "react";
import type { IconName } from "@/content/site";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { size?: number };

/* Hand-drawn 24×24 stroke icons from the original design. Stroke styling comes from globals.css. */
const paths: Record<IconName, React.ReactNode> = {
  scales: <path d="M12 3v18M7 21h10M4 7h16M4 7l-2.5 6a2.5 2.5 0 005 0zM20 7l-2.5 6a2.5 2.5 0 005 0z" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14c2.8 0 5 2.2 5 5" />
    </>
  ),
  home: <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" />,
  chat: <path d="M4 5h11v8H8l-4 3zM9 16v1h7l4 3v-8h-2" />,
  receipt: <path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6" />,
  bank: <path d="M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18" />,
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  message: <path d="M4 5h16v11H9l-5 4z" />,
  document: <path d="M6 3h9l4 4v14H6zM9 12h7M9 16h7M9 8h3" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

export function Icon({ name, size = 24, ...props }: IconProps & { name: IconName }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {paths[name]}
    </svg>
  );
}

export function QuoteIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path d="M10 7H6a2 2 0 00-2 2v3h5v5H4M20 7h-4a2 2 0 00-2 2v3h5v5h-5" />
    </svg>
  );
}

export function AppleLogo({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M16.37 1.43c0 1.14-.49 2.27-1.18 3.08-.74.9-1.99 1.57-2.99 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.57-2.27 1.21-2.98.8-.94 2.14-1.64 3.25-1.68.03.13.05.28.05.43zm4.56 15.71c-.03.07-.46 1.58-1.52 3.12-.94 1.34-1.94 2.71-3.43 2.71-1.52 0-1.9-.88-3.63-.88-1.7 0-2.3.91-3.67.91-1.38 0-2.33-1.26-3.43-2.8C4 18.38 2.96 15.57 2.96 12.92c0-4.28 2.8-6.55 5.55-6.55 1.45 0 2.68.95 3.6.95.87 0 2.22-1.01 3.9-1.01.61 0 2.89.06 4.37 2.19-.13.09-2.38 1.37-2.38 4.19 0 3.26 2.85 4.42 2.96 4.45z" />
    </svg>
  );
}

export function PlayLogo(props: IconProps) {
  return (
    <svg width={22} height={24} viewBox="0 0 22 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d="M3 2l17 10L3 22z" />
      <path d="M3 2l11 11M3 22l11-11" />
    </svg>
  );
}
