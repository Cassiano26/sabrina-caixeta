interface MenuIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  isOpen?: boolean;
}

export function MenuIcon({
  width = 41,
  height = 23,
  className,
  isOpen = false,
}: MenuIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 41 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <line
        x1="1.5"
        y1="1.5"
        x2="39.5"
        y2="1.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transform: isOpen
            ? 'translateY(10px) rotate(45deg)'
            : 'translateY(0)',
          transformOrigin: '20.5px 1.5px',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
      <line
        x1="1.5"
        y1="11.5"
        x2="39.5"
        y2="11.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          opacity: isOpen ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      <line
        x1="1.5"
        y1="21.5"
        x2="39.5"
        y2="21.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transform: isOpen
            ? 'translateY(-10px) rotate(-45deg)'
            : 'translateY(0)',
          transformOrigin: '20.5px 21.5px',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </svg>
  );
}
