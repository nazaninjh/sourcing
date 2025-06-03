import { SVGProps } from "react";

const ArrowIcon = ({
  props,
  direction,
}: {
  props?: SVGProps<SVGSVGElement>;
  direction: "left" | "right";
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      {...props}
      style={{
        transform: `${direction === "left" ? "rotate(180deg)" : "rotate(0)"}`,
      }}
    >
      <path
        d="M11.885 1.77L10.115 0L0.11499 10L10.115 20L11.885 18.23L3.65499 10L11.885 1.77Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { ArrowIcon };
