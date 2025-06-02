import { SVGProps } from "react";

export default function GoUOIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M14 10L10 6M10 6L6 10M10 6V14M10 1C17.2 1 19 2.8 19 10C19 17.2 17.2 19 10 19C2.8 19 1 17.2 1 10C1 2.8 2.8 1 10 1Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
