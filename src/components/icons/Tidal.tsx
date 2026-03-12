import type { IconProps } from "./IconProps";

const Tidal = ({
  fill = "currentColor",
  size = 24,
  className,
  ...props
}: IconProps) => (
  <svg
    fill={fill}
    width={size}
    height={size}
    className={`${className ?? ""} transition-colors`}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.016 5.323l-5.339 5.339-5.339-5.339-5.339 5.339 5.339 5.339 5.339-5.339 5.339 5.339-5.339 5.339 5.339 5.339 5.339-5.339-5.339-5.339 5.339-5.339zM21.391 10.661l5.302-5.307 5.307 5.307-5.307 5.307z" />
  </svg>
);
export default Tidal;
