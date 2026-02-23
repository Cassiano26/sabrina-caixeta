interface GreenShapeProps {
  width?: number | string;
  height?: number | string;
}

export function GreenShape({
  width = '100%',
  height = 'auto',
}: GreenShapeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15903.24 1974.21"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    >
      <g id="Camada_x0020_1">
        <path
          fill="#1C6B70"
          d="M13943.22 1609.16c-501.87,169.85 -1164.73,298.78 -2041.39,343.89 -3660.15,188.3 -3872,-941.52 -6849.55,-965.06 -1516.11,-11.99 -2409.57,143.85 -3014.79,304.37 602.47,-190.61 1525.01,-436.4 3414.83,-421.46 2977.55,23.53 3189.4,1153.36 6849.55,965.06 661.26,-34.02 1200.59,-115.84 1641.35,-226.8z"
        />
        <path
          fill="#529E93"
          d="M15903.18 0c0,0 58.84,1647.66 -3601.31,1835.96 -3660.15,188.3 -3872,-941.52 -6849.55,-965.06 -2977.55,-23.53 -3554.24,600.21 -4260.38,635.52 -706.14,35.31 -1482.89,-576.68 -1082.75,-1506.43l15793.99 0z"
        />
      </g>
    </svg>
  );
}
