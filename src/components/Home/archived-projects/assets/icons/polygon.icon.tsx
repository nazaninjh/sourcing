import { SVGProps } from "react";

export default function PolygonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="67"
      viewBox="0 0 75 67"
      fill="#d04d4d"
      style={{
        gridArea: "stack",
      }}
      {...props}
    >
      <path
        d="M0 0H65C70.5229 0 75 4.47715 75 10V67L27.4996 54.5902C20.9155 52.87 15.6578 47.92 13.5442 41.4514L0 0Z"
        fill="#d04d4d"
      />
    </svg>
  );
}
