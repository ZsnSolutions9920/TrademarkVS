/**
 * SVG wave/curve section dividers. Each variant produces a different organic shape.
 * Fills from the curve DOWN to the bottom of the viewBox, creating a smooth transition
 * between sections when placed at `absolute bottom-0`.
 */

const waves = {
  /* gentle single curve */
  curve: (
    <path d="M0,64 C320,120 680,0 1440,64 L1440,160 L0,160 Z" />
  ),
  /* double S-curve */
  wave: (
    <path d="M0,96 C240,160 480,0 720,64 C960,128 1200,0 1440,64 L1440,160 L0,160 Z" />
  ),
  /* tilt / diagonal slice with soft corner */
  tilt: (
    <path d="M0,128 Q360,0 720,32 Q1080,64 1440,8 L1440,160 L0,160 Z" />
  ),
  /* layered organic blob */
  blob: (
    <path d="M0,96 C180,160 360,32 540,80 C720,128 900,16 1080,64 C1260,112 1350,48 1440,80 L1440,160 L0,160 Z" />
  ),
  /* sharper triangle wave */
  zigzag: (
    <path d="M0,64 L180,96 L360,32 L540,80 L720,16 L900,96 L1080,48 L1260,80 L1440,32 L1440,160 L0,160 Z" />
  ),
};

export default function WaveDivider({
  variant = 'curve',
  color = '#ffffff',
  flip = false,
  className = '',
  height = 80,
}) {
  return (
    <div
      className={`w-full leading-[0] overflow-hidden pointer-events-none ${className}`}
      style={{
        transform: flip ? 'rotate(180deg)' : undefined,
        marginTop: flip ? undefined : `-1px`,
        marginBottom: flip ? `-1px` : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height }}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        {waves[variant] || waves.curve}
      </svg>
    </div>
  );
}
