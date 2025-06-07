import { SVGProps } from "react";

const NextArrowIcon = ({ props }: { props?: SVGProps<SVGSVGElement> }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      {...props}
    >
      <path
        d="M0.115009 18.23L1.88501 20L11.885 10L1.88501 -8.74228e-07L0.115011 1.77L8.34501 10L0.115009 18.23Z"
        fill="black"
      />
    </svg>
  );
};

export { NextArrowIcon };
