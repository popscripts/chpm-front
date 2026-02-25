import type { IconProps } from "./IconProps";

const YoutubeMusic = ({
  fill = "var(--color-off-white-medium)",
  size = 24,
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    className={`${className ?? ""} transition-colors hover:fill-(--color-off-white)`}
    viewBox="0 0 760 760"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M380 0C170.128 0 0 170.584 0 381.008C20.016 886.408 740.056 886.264 760 381C760 170.584 589.864 0 380 0ZM380 599.192C259.712 599.192 161.84 501.328 161.84 381.032C167.76 231.736 279.072 163.96 379.992 163.96H380.008C480.936 163.968 592.256 231.744 598.144 380.544C598.16 501.336 500.288 599.192 380 599.192Z"
      fill={fill}
    />
    <path
      d="M380.016 188.824C507.584 188.84 569.64 288.728 573.296 381.04C573.296 487.624 486.584 574.336 380 574.336C273.416 574.336 186.704 487.624 186.696 381.528C190.384 288.712 252.448 188.816 380.016 188.824ZM308.44 483.904L482.856 376.568L308.44 278.176V483.904Z"
      fill={fill}
    />
  </svg>
);
export default YoutubeMusic;