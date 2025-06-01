import { SVGProps } from "react";

const HamburgerIcon = ({
  props,
  color,
}: {
  props?: SVGProps<SVGSVGElement>;
  color?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M4 16H28"
        stroke={color ? color : "#F9F9FF"}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8H28"
        stroke={color ? color : "#F9F9FF"}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 24H28"
        stroke={color ? color : "#F9F9FF"}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { HamburgerIcon };
