import { SVGProps } from "react";

const UserIcon = ({
  props,
  color,
}: {
  props?: SVGProps<SVGSVGElement>;
  color?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <rect width="36" height="36" rx="10" fill={color ? color : "#F9F9FF"} />
      <path
        d="M24.5465 25.3637V23.7273C24.5465 22.8593 24.2017 22.0269 23.5879 21.4132C22.9742 20.7994 22.1417 20.4546 21.2737 20.4546H14.7283C13.8603 20.4546 13.0279 20.7994 12.4141 21.4132C11.8004 22.0269 11.4556 22.8593 11.4556 23.7273V25.3637"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9988 17.1819C19.8063 17.1819 21.2715 15.7167 21.2715 13.9092C21.2715 12.1017 19.8063 10.6365 17.9988 10.6365C16.1913 10.6365 14.7261 12.1017 14.7261 13.9092C14.7261 15.7167 16.1913 17.1819 17.9988 17.1819Z"
        stroke="currentColor"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { UserIcon };
